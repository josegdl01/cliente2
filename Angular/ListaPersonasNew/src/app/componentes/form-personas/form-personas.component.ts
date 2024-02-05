import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-personas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-personas.component.html',
  styleUrl: './form-personas.component.css'
})
export class FormPersonasComponent {

  public persona: Persona;
  public buttonText: string;
  private personId: number;

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar: ActivatedRoute){
    this.persona = {
      id:-1,
      dni:"DNI",
      nombre:"NOMBRE",
      apellidos:"APELLIDOS"
    };

    this.personId = ar.snapshot.params["id"];
    this.buttonText = "AÑADIR"
  }

  fillForm(persona: Persona){
    
    if(this.personId != -1){

    }
  }
}
