import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { InterpreteComponent } from './components/interprete/interprete.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';
import { InterpreteFormComponent } from './components/interprete-form/interprete-form.component';

export const routes: Routes = 
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"pelicula",
        component:PeliculaComponent
    },
    {
        path:"interprete",
        component:InterpreteComponent
    },
    {
        path:"pelicula-form/:id",
        component:PeliculaFormComponent
    },
    {
        path:"interprete-form/:id",
        component:InterpreteFormComponent
    }
];
