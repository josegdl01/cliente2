import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar: ActivatedRoute){
    
  }
}
