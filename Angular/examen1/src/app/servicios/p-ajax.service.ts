import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleFactura } from '../modelos/detalle-factura';
import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "http://localhost/serviciosWeb/examen1/servidor.php";
  constructor(private http:HttpClient) { }

  selectFacturas(){
    let param = JSON.stringify({servicio: "facturas"});
    console.log("Método selectFacturas recibe: ", param);

    return this.http.post<Factura []>(this.url, param);
  }

  selectDetalle(id:number){
    let param = JSON.stringify({
      servicio: "detalle",
      id: id
    });
    console.log("Método selectDetalle recibe: ", param);

    return this.http.post<DetalleFactura[]>(this.url, param);
  }

  anadirDetalle(detalle: DetalleFactura, id_factura: number){
    let param = JSON.stringify({
      servicio: "anade",
      id_factura: id_factura,
      cantidad: detalle.cantidad,
      concepto: detalle.concepto,
      precio: detalle.precio,
      tipo_iva: detalle.tipo_iva
    });
    console.log("Parámetro recibido en el método anadirDetalle: ", param);

    return this.http.post<DetalleFactura[]>(this.url, param);
  }

  borrarDetalle(id: number, idFact: number){
    let param = JSON.stringify({
      servicio: "borra",
      id: id,
      id_factura:idFact
    });
    console.log("Parámetro recibido en el método borrarDetalle: ", param);

    return this.http.post<DetalleFactura[]>(this.url, param);
  }

  modificarDetalle(detalle: DetalleFactura){
    let param = JSON.stringify({
      servicio: "modifica",
      id_factura: detalle.id_factura,
      cantidad: detalle.cantidad,
      concepto: detalle.concepto,
      precio: detalle.precio,
      tipo_iva: detalle.tipo_iva
    });
    console.log("Parámetro recibido en el método anadirDetalle: ", param);

    return this.http.post<DetalleFactura[]>(this.url, param);
  }
}
