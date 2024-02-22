import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Interprete } from '../models/interprete';

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  selectInterpretes(){
    let param = JSON.stringify({
      accion: "ListarInterpretes"
    });

    console.log("Método lista interpretes recibe: ", param );

    return this.http.post<Interprete []>(this.url, param);
  }

  selectInterprete(id: number){
    let param = JSON.stringify({
      accion: "ObtenerInterpreteId",
      id: id
    });

    console.log("Método lista interpretes recibe: ", param );

    return this.http.post<Interprete>(this.url, param);
  }

  insertInterprete(int: Interprete){
    let param = JSON.stringify({
      accion: "AnadeInterprete",
      interprete: int
    });

    console.log("Método insert interprete recibe: ", param );

    return this.http.post<{result:string}>(this.url, param);
  }

  updateInterprete(int: Interprete){
    let param = JSON.stringify({
      accion: "ModificaInterprete",
      interprete: int
    });

    console.log("Método update interprete recibe: ", param );

    return this.http.post<{result:string}>(this.url, param);
  }

  deleteInterprete(int: Interprete){
    let param = JSON.stringify({
      accion: "BorrarInterprete",
      id: int.id
    });

    console.log("Método delete interprete recibe: ", param );

    return this.http.post<Interprete []>(this.url, param);
  }
}
