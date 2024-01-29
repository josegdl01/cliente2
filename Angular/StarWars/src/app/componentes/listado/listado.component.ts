import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [DetalleComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public listaPersonas: any[] = [];
  public datosPlanetas: any;

  constructor(private servicioAjax: PAjaxService) {
    this.servicioAjax.pedirPersonajes().subscribe(datos => {
      console.log(datos);

      this.listaPersonas = datos.results;
    });
  }

  mostrarDatosPlanetas(direccionP: string, evento: any) {
    console.log(direccionP, evento);
    evento.preventDefault();

    this.servicioAjax.pedirPlanetas(direccionP + "?format=json").subscribe(datos_plan => {
      console.log(datos_plan);
      this.datosPlanetas = datos_plan;
    });
  }
}
