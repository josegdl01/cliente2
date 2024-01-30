import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "http://localhost/serviciosWeb/persona/servidor.php";
  constructor(private httpClient: HttpClient){

   }

  mostrarPersonas(){
    console.log("Realizando petición sobre PERSONAS");
    let param = JSON.stringify({servicio: "listar"});
    return this.httpClient.post<Persona[]>(this.url, param);
  }
}
