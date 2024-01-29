import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private urlPersonajes: string = "https://swapi.dev/api/people/?format=json";
  constructor(private http: HttpClient) { }

  pedirPersonajes() {
    console.log("Estoy en pedir personaje");
    return this.http.get<any>(this.urlPersonajes);
    // return this.http.get(this.urlPersonajes);
  }

  pedirPlanetas(url: string) {
    console.log("Estoy en pedir planetas");
    return this.http.get<any>(url);
  }
}
