import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string;

  constructor(private peticion: HttpClient) {
    this.url = "http://localhost/serviciosWeb/persona/servidor.php";
   }

  selectAll(){
    let param = JSON.stringify({
      servicio: "listar"
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO SELECTALL: ", param);
    return this.peticion.post<Persona []>(this.url, param);
  }
}
