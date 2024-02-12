import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = "http://localhost/serviciosWeb/petclinic/servicios.php";
  constructor(private http: HttpClient) { }

  selectOwners(){
    let param = JSON.stringify({
      accion: "ListarOwners"
    });
    console.log("SELECT OWNERS RECIBE: ", param);
    return this.http.post<Owner []>(this.url, param);
  }

  selectOwner(id:number){
    let param = JSON.stringify({
      accion: "ObtenerOwnerId",
      id:id
    });
    console.log("SELECT OWNER RECIBE: ", param);
    return this.http.post<Owner>(this.url, param);
  }

  deleteOwner(id: number){
    let param = JSON.stringify({
      accion: "BorraOwner",
      id:id
    });
    console.log("DELETE OWNER RECIBE: ", param);
    return this.http.post<Owner []>(this.url, param);
  }

  insertOwner(owner: Owner){
    let param = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    });
    console.log("INSERT OWNER RECIBE: ", param);
    return this.http.post<Owner []>(this.url, param);
  }

  updateOwner(owner: Owner){
    let param = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner
    });
    console.log("UPDATE OWNER RECIBE: ", param);
    return this.http.post<Owner []>(this.url, param);
  }
}
