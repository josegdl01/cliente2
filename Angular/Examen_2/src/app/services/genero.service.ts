import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  selectGeneros(){
    let param = JSON.stringify({
      accion: "ListarGeneros"
    });

    console.log("Método listar generos recibe: ", param);

    return this.http.post<Genero []>(this.url, param);
  }

}
