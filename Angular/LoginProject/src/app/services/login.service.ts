import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL_LOGIN;
   }

   getLogin(datos: any){
    let param = JSON.stringify({
      servicio: "inicio_sesion",
      email : datos.email,
      clave : datos.password
    });

    console.log("Método de inicio de sesión recibe: ", param);
    return this.http.post<any>(this.url, param);
   }
}
