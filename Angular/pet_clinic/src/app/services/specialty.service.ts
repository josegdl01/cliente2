import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialty } from '../models/specialty';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  private url = environment.API_URL;
  constructor(private http: HttpClient) { }

  selectSpecialties(){
    let param = JSON.stringify({
      accion: "ListarSpecialties"
    });
    console.log("SELECT SPECIALTIES RECIBE: ", param);

    return this.http.post<Specialty[]>(this.url, param);
  }

  insertSpecialty(spec: Specialty){
    let param = JSON.stringify({
      accion: "AnadeSpecialty",
      specialty: spec
    });
    console.log("INSERT SPECIALTY RECIBE: ", param);

    return this.http.post<any>(this.url, param);
  }
}
