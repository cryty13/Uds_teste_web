import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SaborService {

    constructor(private http: HttpClient) { }

    GetSabor() {
        return this.http.get(environment.apiURI + 'Get/Sabor');
    }
}