import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar: ActivatedRoute){
    this.persona = {
      id:-1,
      dni:"DNI",
      nombre:"NOMBRE",
      apellidos:"APELLIDOS"
    };
    this.buttonText = "AÑADIR"
  }
}
