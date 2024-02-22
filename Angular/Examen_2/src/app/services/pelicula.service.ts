import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  selectPeliculas(){
    let param = JSON.stringify({
      accion: "ListarPeliculas"
    });

    console.log("Método select Peliculas recibe: ",param);

    return this.http.post<Pelicula []>(this.url, param);
  }

  selectPelicula(id: number){
    let param = JSON.stringify({
      accion: "ObtenerPeliculaId",
      id: id
    });

    console.log("Método select Pelicula recibe: ",param);

    return this.http.post<Pelicula>(this.url, param);
  }

  deletePelicula(peli: Pelicula){
    let param = JSON.stringify({
      accion: "BorrarPelicula",
      id: peli.id
    });

    console.log("Método borrar Pelicula recibe: ",param);

    return this.http.post<Pelicula []>(this.url, param);
  }

  insertPelicula(peli: Pelicula){
    let param = JSON.stringify({
      accion: "AnadePelicula",
      pelicula: peli
    });

    console.log("Método insertar Pelicula recibe: ",param);

    return this.http.post<{result:string}>(this.url, param);
  }

  updatePelicula(peli: Pelicula){
    let param = JSON.stringify({
      accion: "ModificaPelicula",
      pelicula: peli
    });

    console.log("Método modificar Pelicula recibe: ",param);

    return this.http.post<{result:string}>(this.url, param);
  }
}
