import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "servidor.php";
  private param = {servicio: "listar"};
  constructor(private httpClient: HttpClient) { }

  mostrarPersonas(){
    console.log("Realizando petición sobre PERSONAS");
    return this.httpClient.post<any>(this.url, this.param).subscribe();
  }
}
