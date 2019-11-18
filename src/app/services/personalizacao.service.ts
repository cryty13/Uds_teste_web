
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PersonalizacaoService {

    constructor(private http: HttpClient) { }

    GetPersonalizacao() {
        return this.http.get(environment.apiURI + 'Get/Personalizacao');
    }
}