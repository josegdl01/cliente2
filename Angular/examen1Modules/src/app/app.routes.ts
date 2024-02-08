import { Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListaDetalleComponent } from './componentes/lista-detalle/lista-detalle.component';

export const routes: Routes = 
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