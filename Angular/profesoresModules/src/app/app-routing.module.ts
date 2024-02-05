import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadosComponent } from './componentes/listados/listados.component';
import { FormProfesoresComponent } from './componentes/form-profesores/form-profesores.component';

const routes: Routes = 
[
  {
    path: "",
    component:ListadosComponent
  },
  {
    path: "profesores-add/:id",
    component:FormProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
