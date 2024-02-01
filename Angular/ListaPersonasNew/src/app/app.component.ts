import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FormPersonasComponent } from './componentes/form-personas/form-personas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoComponent, FormPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaPersonasNew';
}
