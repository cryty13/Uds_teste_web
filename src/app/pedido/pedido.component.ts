import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
	selector: 'app-pedido',
	templateUrl: './pedido.component.html',
	styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

	ListaPizza: any = []

	constructor(public _PizzaService: PizzaService) { }

	ngOnInit() {
		this._PizzaService.GetPizza().subscribe(result => { this.ListaPizza = result; });
	}

}
