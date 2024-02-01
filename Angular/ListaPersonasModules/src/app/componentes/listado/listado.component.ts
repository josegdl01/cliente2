import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  public listaPersonas: Persona[] = [];
  public persona: Persona;
  public textoBoton: string;

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar: ActivatedRoute) {

    this.persona = {
      id: -1,
      dni: "29498314D",
      nombre: "José",
      apellidos: "García De Lemus"
    }
    this.textoBoton = "AÑADIR";

    this.pAjax.mostrarPersonas().subscribe(datos => {
      console.log("Constructor del componente listado", datos);
      this.listaPersonas = datos;
    })
  }

  irANuevaPersona() {
    this.ruta.navigate(['personas-add', -1]);
  }

  borrarPersona(persona: Persona){
    console.log("ID RECIBIDO: ",persona.id);

    if(confirm("Seguro que deseas borrar a: " + persona.nombre)){
      this.pAjax.borrarPersona(persona).subscribe(res =>{
        this.listaPersonas = res;
      });
    }
  }
}
