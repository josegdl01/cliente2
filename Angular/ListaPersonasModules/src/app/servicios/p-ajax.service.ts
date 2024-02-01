import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "http://localhost/serviciosWeb/persona/servidor.php";
  constructor(private httpClient: HttpClient) {

  }

  mostrarPersonas() {
    console.log("Realizando petición sobre PERSONAS");
    let param = JSON.stringify({ servicio: "listar" });
    return this.httpClient.post<Persona[]>(this.url, param);
  }

  borrarPersona(id: number, nombre: string) {
    console.log("Borrando a este pibe: " + nombre);
    let param = JSON.stringify({
      servicio: "borrar",
      id: id
    });

    return this.httpClient.post<Persona[]>(this.url, param);
  }

  editarPersona(id: number, dni: string, nombre: string, apellidos: string) {
    console.log("Editando a este pibe: ");
    let param = JSON.stringify({
      servicio: "modificar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos,
      id: id
    });

    return this.httpClient.post<Persona[]>(this.url, param);
  }

  insertarPersona(dni: string, nombre: string, apellidos: string) {
    console.log("Borrando a este pibe: ");
    let param = JSON.stringify({
      servicio: "insertar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos
    });

    return this.httpClient.post<Persona[]>(this.url, param);
  }
}
