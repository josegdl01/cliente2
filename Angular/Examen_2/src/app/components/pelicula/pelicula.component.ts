import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  public pelis: Pelicula [] = [];

  constructor(private serv:PeliculaService){
    this.serv.selectPeliculas().subscribe({
      next: results => this.pelis = results,
      error: err => console.error(err)
    });
  }

  borrarPeli(peli: Pelicula){
    if(confirm("¿Está seguro de que desea borrar " +peli.nombre+"?")){
      this.serv.deletePelicula(peli).subscribe({
        next: results => this.pelis = results,
        error: err => console.error(err)
      })
    }
  }
}
