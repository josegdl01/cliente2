import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {

  public persona: Persona;

  public textoBoton: string = "AÑADIR";

  public personaId: number;

  constructor(private pAjax:PAjaxService, private ruta: Router, private route: ActivatedRoute){
    this.persona = {
      id: -1,
      dni: "DNI",
      nombre: "NOMBRE",
      apellidos: "APELLIDOS"
    };

    this.textoBoton = "AÑADIR";
    this.personaId = -1;
  }

  ngOnInit() {
    this.personaId = this.route.snapshot.params["id"];
    console.log("ID: " , this.personaId);

    if(this.personaId == -1){
      this.textoBoton = "AÑADIR";
    } else {
      this.textoBoton = "MODIFICAR"

      this.pAjax.seleccionarPersona(this.personaId).subscribe(
        persona => this.persona = persona
      )
    }
  }

  onSubmitForm(persona: Persona ){
    console.log("Formulario enviado: ", persona);

    if(this.personaId == -1){
      this.pAjax.anyadirPersona(persona).subscribe();
    }else {
      let personaInsert: Persona = {
        id: this.personaId,
        dni:persona.dni,
        nombre: persona.nombre,
        apellidos:persona.apellidos
      }
  
      console.log(personaInsert);
  
      this.pAjax.modificarPersona(personaInsert).subscribe();
    }


    this.ruta.navigate(["/"]);
  }
}
