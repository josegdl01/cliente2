import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../../modelos/profesor';
import { Departamento } from '../../modelos/departamento';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrl: './listados.component.css'
})
export class ListadosComponent {

  public profesor: Profesor;
  public departs: Departamento[] = [];
    
  constructor(private pAjax: PAjaxService, private ruta: Router, private ar:ActivatedRoute){
      this.profesor = {
        id: -1,
        dni: "DNI",
        nombre:"Nombre",
        apellidos:"Apellidos",
        departamento: 1
      }

      this.pAjax.selectDepartamentos().subscribe({
        next: result => this.departs = result,
        error: err => console.error(err)
      })
    }

}
