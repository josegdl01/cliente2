import { Routes } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FormPersonasComponent } from './componentes/form-personas/form-personas.component';

export const routes: Routes = 
[
    {
        path: "",
        component: ListadoComponent
    },
    {
        path:"personas-add/:id",
        component: FormPersonasComponent
    }
];
