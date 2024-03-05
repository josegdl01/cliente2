import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-listado',
  standalone: true,
  imports: [],
  templateUrl: './persona-listado.component.html',
  styleUrl: './persona-listado.component.css'
})
export class PersonaListadoComponent {

  public personas : Persona[] = [];

  constructor(private serv: PersonaService) {
    this.serv.selectPersonas().subscribe({
      next: data => {
        console.log(data);
        this.personas = data},
      error: err => console.error(err)
    });
  }
}
