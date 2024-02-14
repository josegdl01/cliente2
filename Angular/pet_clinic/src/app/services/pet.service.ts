import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = environment.API_URL;
  
  constructor(private http: HttpClient) {

   }

   insertPet(pet: Pet){
    let param = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });
    console.log("MÉTODO AÑADIR PET RECIBE: "+ param);

    return this.http.post<any>(this.url, param);
   }
}
