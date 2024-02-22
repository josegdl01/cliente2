import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../models/pelicula';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Interprete } from '../../models/interprete';
import { Genero } from '../../models/genero';
import { InterpreteService } from '../../services/interprete.service';
import { GeneroService } from '../../services/genero.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-pelicula-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './pelicula-form.component.html',
  styleUrl: './pelicula-form.component.css'
})
export class PeliculaFormComponent {

  public peli: Pelicula = <Pelicula>{};
  public ints: Interprete [] = [];
  public generos: Genero [] = [];
  public textoBoton : string = "Añadir";
  private idPeli: number;

  constructor(private serv: PeliculaService,private servInt: InterpreteService,private servGen: GeneroService, private ar: ActivatedRoute, private ruta: Router) {
    this.idPeli = this.ar.snapshot.params["id"];
    this.peli.interpretes = [];

    this.servInt.selectInterpretes().subscribe({
      next: res => this.ints = res,
      error: err => console.error(err)
    });

    this.servGen.selectGeneros().subscribe({
      next: res => this.generos = res,
      error: err => console.error(err)
    });

    if (this.idPeli != -1) {
      this.serv.selectPelicula(this.idPeli).subscribe({
        next: res => {
          this.peli = res;
          this.textoBoton = "Modificar";
          this.peli.interpretes = environment.SeleccionarObjArray(this.ints, this.peli.interpretes);
          this.peli.genero = this.SeleccionarObjGen(this.generos, this.peli.genero);

        },
        error: err => console.error(err)
      })
    } else {
      this.peli.id = -1;
    }
  }

  insertModPeli(peli: Pelicula) {
    if (peli.id == -1) {
      this.serv.insertPelicula(peli).subscribe({
        next: result => { 
          if(result.result == "FAIL"){alert("Ha habido un problema al añadir una película")}
         },
        error: err => console.error(err)
      });
    } else {
      if(peli.interpretes == null){
        peli.interpretes = [];
      }
      this.serv.updatePelicula(peli).subscribe({
        next: result => { 
          if(result.result == "FAIL"){alert("Ha habido un problema al añadir una película")}
         },
        error: err => console.error(err)
      });
    }
    this.ruta.navigate(["pelicula"]);
  }

  SeleccionarObjGen(gens: Genero[], gen: Genero) {
    let res = <Genero>{};
    gens.forEach(valor => {
        if (environment.jsonEqual(valor, gen))
            res = valor;
    });
    return res;
}

volver(){
  this.ruta.navigate(["pelicula"]);
}
}

