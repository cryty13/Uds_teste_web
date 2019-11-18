
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PizzaService {

    constructor(private http: HttpClient) { }

    GetPizza(): Observable<any> {
        return this.http.get(environment.apiURI + 'Get/Pizza');
    }
    CalcularPizza(Pizza) {
        let headers = new HttpHeaders();
        return this.http.post(environment.apiURI + 'Post/Calcular', {
            "Sabor": Pizza.Sabor, "Tamanho": Pizza.Tamanho, "adicionalPizza": Pizza.Personalizacao
        }, { headers: headers })
    }
    ComprarPizza(Pizza) {
        let headers = new HttpHeaders();
        return this.http.post(environment.apiURI + 'Post/Pizza', {
            "Sabor": Pizza.Sabor, "Tamanho": Pizza.Tamanho, "adicionalPizza": Pizza.Personalizacao,
            "ValorTotal": Pizza.ValorTotal, "TempoPreparo": Pizza.TempoPreparo
        })
    }
}