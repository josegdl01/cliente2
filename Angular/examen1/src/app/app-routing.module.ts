import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListaDetalleComponent } from './componentes/lista-detalle/lista-detalle.component';

const routes: Routes = 
[
  {
    path:"",
    component:PrincipalComponent
  },
  {
    path:"lista-detalle/:id/:numero",
    component:ListaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
