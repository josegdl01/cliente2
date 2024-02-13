import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  private url = environment.API_URL;
  constructor(private http: HttpClient) { }

  selectVets() {
    let param = JSON.stringify({
      accion: "ListarVets"
    });
    console.log("SELECT VETS RECIBE: ", param);

    return this.http.post<Vet[]>(this.url, param);
  }

  selectVetById(id: number) {
    let param = JSON.stringify({
      accion: "ObtenerVetId",
      id: id
    });
    console.log("SELECT VET BY ID RECIBE: ", param);

    return this.http.post<Vet>(this.url, param);
  }

  updateVet(vet: Vet) {
    let param = JSON.stringify({
      accion: "ModificaVet",
      vet: vet
    });
    console.log("UPDATE VET RECIBE: ", param);

    return this.http.post<Vet[]>(this.url, param);
  }

  insertVet(vet: Vet) {
    let param = JSON.stringify({
      accion: "AnadeVet",
      vet: vet
    });
    console.log("INSERT VET RECIBE: ", param);

    return this.http.post<Vet[]>(this.url, param);
  }

  deleteVet(id: number){
    let param = JSON.stringify({
      accion: "BorraVet",
      id:id
    });
    console.log("DELETE VET RECIBE: ", param);

    return this.http.post<any>(this.url, param);
  }
}
