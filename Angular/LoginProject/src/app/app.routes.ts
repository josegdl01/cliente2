import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PersonaListadoComponent } from './components/persona-listado/persona-listado.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';

export const routes: Routes = 
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"personas",
        component:PersonaListadoComponent
    },
    {
        path:"personas-add",
        component:PersonaFormComponent
    }
];
