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

  seleccionarPersona(id: number) {
    console.log("Estamos seleccionando a una sola persona");
    let param = JSON.stringify({servicio: "selPersonaID",
                                id: id});
    return this.httpClient.post<Persona>(this.url, param);
  }

  borrarPersona(persona: Persona) {
    console.log("Estamos borrando a una persona");

    let param = JSON.stringify({
      servicio: "borrar",
      id: persona.id        
    });

    return this.httpClient.post<Persona []>(this.url, param);
  }

  anyadirPersona(persona: Persona) {
    console.log("Estamos añadiendo a una persona");
    
    let param = JSON.stringify({
      servicio: "insertar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    });

    return this.httpClient.post<Persona[]>(this.url, param);
  }

  modificarPersona(persona: Persona) {
    console.log("Estamos modificando una persona");
    let param = JSON.stringify({
      servicio: "modificar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos,
      id:persona.id
    });
    console.log("PARAMETRO RECIBIDO: ", param);
    return this.httpClient.post<Persona[]>(this.url, param);
  }
}
