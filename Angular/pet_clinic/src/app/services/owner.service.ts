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
      accion: "ObtenerOwnerId"
    });
    console.log("SELECT OWNER RECIBE: ", param);
    return this.http.post<Owner>(this.url, param);
  }
}
