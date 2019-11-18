
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class TamanhoService {

    constructor(private http: HttpClient) { }

    GetTamanho() {
        return this.http.get(environment.apiURI + 'Get/Tamanho');
    }
}