import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FormPersonaComponent } from './componentes/form-persona/form-persona.component';

const routes: Routes = [

  {    //Lo que se le añadirá a la URL para llegar al componente
    path: "",
    //Componente en sí
    component: ListadoComponent
  },
  {
    path: "personas-add/:id",
    component: FormPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
