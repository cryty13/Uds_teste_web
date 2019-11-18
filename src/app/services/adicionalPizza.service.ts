import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdicionalPizzaService {

    constructor(private http: HttpClient) { }

    GetAdicionalPizza() {
        return this.http.get(environment.apiURI + 'Get/AdicionalPizza');
    }
}