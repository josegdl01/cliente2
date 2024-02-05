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

  selectAll() {
    let param = JSON.stringify({
      servicio: "listar"
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO SELECTALL: ", param);
    return this.peticion.post<Persona[]>(this.url, param);
  }

  selectPerson(id: number) {
    let param = JSON.stringify({
      servicio: "selPersonaID",
      id: id
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO SELECTPERSON: " , param);

    return this.peticion.post<Persona>(this.url, param);
  }

  deletePerson(persona: Persona) {
    let param = JSON.stringify({
      servicio: "borrar",
      id: persona.id
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO DELETEPERSON: " , param);

    return this.peticion.post<Persona[]>(this.url, param);
  }

  insertPersona(persona: Persona){
    let param = JSON.stringify({
      servicio: "insertar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO INSERTPERSONA: ", param);

    return this.peticion.post<Persona []>(this.url, param);
  }

  updatePersona(persona: Persona){
    let param = JSON.stringify({
      servicio: "modificar",
      id: persona.id,
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    });
    console.log("PARÁMETRO RECIBIDO EN MÉTODO UPDATEPERSONA: ", param);

    return this.peticion.post<Persona []>(this.url, param);
  }
}
