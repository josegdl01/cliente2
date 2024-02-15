import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PetType } from '../models/pet-type';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {

  private url = environment.API_URL;
  
  constructor(private http: HttpClient) {

   }

   selectTypes(){
    let param = JSON.stringify({
      accion: "ListarPettypes"
    });
    console.log("SELECT TYPES RECIBE: ", param);

    return this.http.post<PetType[]>(this.url, param);
   }

   insertType(type: PetType){
    let param = JSON.stringify({
      accion: "AnadePettype",
      pettype:type
    });
    console.log("INSERT TYPE RECIBE: ", param);

    return this.http.post<PetType>(this.url, param);
   }

   deleteType(type: PetType){
    let param = JSON.stringify({
      accion: "BorraPettype",
      id:type.id
    });
    console.log("DELETE TYPE RECIBE: ", param);

    return this.http.post<any>(this.url, param);
   }

   modType(type: PetType){
    let param = JSON.stringify({
      accion: "ModificaPettype",
      pettype: type
    });
    console.log("MODIFICAR TYPE RECIBE: ", param);

    return this.http.post<any>(this.url, param);
   }
}
