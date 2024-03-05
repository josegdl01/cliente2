import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url: string = environment.API_URL_SERV;

  constructor(private http: HttpClient) {
   // this.url = environment.API_URL_SERV;
   }

   selectPersonas(){
    let param = JSON.stringify({
      servicio: "listar"
    });

    console.log("Método listar personas recibe: ", param);
    console.log("cabecera: ", environment.header());

    return this.http.post<Persona[]>(this.url, param, environment.header());
   }
}
