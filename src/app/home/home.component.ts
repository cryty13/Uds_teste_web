import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { AdicionalPizzaService } from '../services/adicionalPizza.service';
import { SaborService } from '../services/sabor.service';
import { TamanhoService } from '../services/tamanho.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalizacaoService } from '../services/personalizacao.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	ListaTamanho: any = [];
	ListaSabor: any = [];
	ListaAdicionalPizza: any = [];
	ListaPersonalizacao: any = [];
	ListaAdicional: any = [];

	retorno: boolean = false;
	ValorPagar: any;
	Tempo: any;
	public form: FormGroup;


	constructor(
		public _PizzaService: PizzaService,
		public _TamanhoService: TamanhoService,
		public _SaborService: SaborService,
		public _AdicionalPizzaService: AdicionalPizzaService,
		public _PersonalizacaoService: PersonalizacaoService,
		private formBuilder: FormBuilder
	) {
		this.form = this.formBuilder.group({
			Tamanho: ['', Validators.compose([Validators.required])],
			Sabor: ['', Validators.compose([Validators.required])],
			Personalizacao: [''],
			ValorTotal: [''],
			TempoPreparo: ['']
		});
	}

	ngOnInit() {
		this._PersonalizacaoService.GetPersonalizacao().subscribe(result => { this.ListaPersonalizacao = result; });
		this._TamanhoService.GetTamanho().subscribe(result => { this.ListaTamanho = result; });
		this._SaborService.GetSabor().subscribe(result => { this.ListaSabor = result; });
		this._AdicionalPizzaService.GetAdicionalPizza().subscribe(result => { this.ListaAdicionalPizza = result; });
	}
	Calcular() {
		if (this.form.valid) {
			this.form.value['Personalizacao'] = this.ListaAdicional;
			this.retorno = true;
			this._PizzaService.CalcularPizza(this.form.value).subscribe(result => {
				this.ValorPagar = result['valorTotal'];
				this.Tempo = result['tempoPreparo'];
				this.form.value.ValorTotal = this.ValorPagar;
				this.form.value.TempoPreparo = this.Tempo;
			});
		}
	}
	Comprar() {
		this.form.value['Personalizacao'] = this.ListaAdicional;
		this._PizzaService.ComprarPizza(this.form.value).subscribe(result => {
			alert('Pedido Feito');
			this.limpar();
		})
	}
	Adicional() {
		if (this.form.value.Personalizacao == "" || this.form.value.Personalizacao == null) {
		} else {
			this.ListaAdicional.push(this.ListaPersonalizacao.find(x => x['descricao'] == (<HTMLInputElement>document.getElementById("Personalizacao")).value))
		}
		this.Calcular();
	}
	limpar() {
		this.ListaAdicional = [];
		this.form.reset();
		this.retorno = false;
	}
}
