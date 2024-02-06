import { Component } from '@angular/core';
import { Factura } from '../../modelos/factura';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  
  public facturas: Factura[] = [];
  
  constructor(private pAjax: PAjaxService, private ruta:Router){

    this.pAjax.selectFacturas().subscribe({
      next: facts => this.facturas = facts,
      error: err => console.error(err)
    })
  }

}
