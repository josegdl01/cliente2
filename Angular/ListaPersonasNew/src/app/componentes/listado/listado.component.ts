import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, RouterLink } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public persona: Persona = {
    id:-1,
    dni: "DNI", 
    nombre: "NOMBRE",
    apellidos: "APELLIDOS" 
  };
  
  public personas: Persona[];

  constructor(private pAjax: PAjaxService, private ruta: Router) {
    this.personas = [];

    this.pAjax.selectAll().subscribe({
          next: res => this.personas = res,
          error:error => console.error(error)
        })
  }

    insertFormRoute(){
      this.ruta.navigate(["personas-add", -1]);
    }

    modFormRoute(){
      this.ruta.navigate(["personas-add", ]);
    }

    deletePerson(persona: Persona){
      if(confirm("¿Está seguro de que desea borrar a "+persona.nombre +" ?")){
          this.pAjax.deletePerson(persona).subscribe({
            next: res => this.personas = res,
            error: err => console.error(err)
          });
      }
    }
  }

