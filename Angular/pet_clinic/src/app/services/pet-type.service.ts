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

   selectTypeId(id:number){
    let param = JSON.stringify({
      accion: "ListarPettypes"
    });
    console.log("SELECT TYPE BY ID RECIBE: ", param);

    return this.http.post<PetType>(this.url, param);
   }
}
