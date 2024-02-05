import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../modelos/profesor';
import { Departamento } from '../modelos/departamento';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  private url: string = "http://localhost/serviciosWeb/profes/deptosProfes.php";;
  constructor(private peticion: HttpClient) {}

  selectDepartamentos() {
    let param = JSON.stringify({servicio: "departamentos"});
    console.log("Parámetro recibido: ", param);
    return this.peticion.post<Departamento[]>(this.url, param);
  }

  selectProfesores(idDepartamento: number) {
    let param = JSON.stringify({
      servicio: "profesores",
      id_departamento: idDepartamento
    });
    console.log("Parámetro recibido: ", param);
    return this.peticion.post<Profesor[]>(this.url, param);
  }

  selectProfesor(id: number) {
    let param = JSON.stringify({
      servicio: "selProfeID",
      id: id
    });
    console.log("Parámetro recibido: ", param);

    return this.peticion.post<Profesor>(this.url, param);
  }

  borrarProfesor(id: number) {
    let param = JSON.stringify({
      servicio: "eliminaProfe",
      id: id
    });
    console.log("Parámetro recibido: ", param);
    return this.peticion.post<Profesor[]>(this.url, param);
  }

  modificarProfesor(profesor: Profesor) {
    let param = JSON.stringify({
      servicio: "modificaProfe",
      dni: profesor.dni,
      nombre: profesor.nombre,
      apellidos: profesor.apellidos,
      id: profesor.id

    });
    console.log("Parámetro recibido: ", param);
    return this.peticion.post<Profesor[]>(this.url, param);
  }

  insertarProfesor(profesor: Profesor) {
    let param = JSON.stringify({
      servicio: "anadeProfe",
      dni: profesor.dni,
      nombre: profesor.nombre,
      apellidos: profesor.apellidos,
      id: profesor.id
    });
    console.log("Parámetro recibido: ", param);
    return this.peticion.post<Profesor[]>(this.url, param);
  }
}
