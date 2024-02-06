import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { DetalleFactura } from '../../modelos/detalle-factura';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css'
})
export class ListaDetalleComponent {

  public numeroFact: string = "";
  public detalles: DetalleFactura[] = [];
  public ivaTotal: number = 0;
  public totalT: number = 0;
  public mostrar: boolean = false;
  public textoBoton: string= "Nuevo Detalle";
  public idActual: number;
  public det:DetalleFactura;

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar: ActivatedRoute) {
    this.numeroFact = this.ar.snapshot.params["numero"];
    this.idActual = this.ar.snapshot.params["id"];
    this.det = {
      id: -1,
      id_factura: this.idActual,
      cantidad: 1,
      concepto: "concepto",
      precio: 1,
      tipo_iva: 1
    }
    this.pAjax.selectDetalle(this.idActual).subscribe({
      next: deta => this.detalles = deta,
      error: err => console.error(err),
    });
  }

  mostrarForm(){
    if(this.mostrar){
      this.mostrar = false;
      this.textoBoton = "Nuevo Detalle"
    } else {
      this.mostrar = true;
      this.textoBoton = "Cancelar";
    }
  }

  insertDetalle(detalle:DetalleFactura){
    console.log(detalle);
    if(this.det.id == -1){
      this.pAjax.anadirDetalle(detalle, this.idActual).subscribe({
        next: detas => this.detalles = detas,
        error: err => console.error(err)
      })
    } else {

    }
  }

  borrarDetalle(id: number, idFact: number){
    console.log(id, idFact);

    if(confirm("¿Está seguro de querer borrar estas facturas?")){
      this.pAjax.borrarDetalle(id, idFact).subscribe({
        next: res => this.detalles = res,
        error: err => console.log(err)
      });
    }
  }
}
