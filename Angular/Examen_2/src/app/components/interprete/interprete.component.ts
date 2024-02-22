import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Interprete } from '../../models/interprete';
import { InterpreteService } from '../../services/interprete.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interprete',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './interprete.component.html',
  styleUrl: './interprete.component.css'
})
export class InterpreteComponent {

  public interpretes: Interprete [] = [];

  constructor(private serv: InterpreteService) {
    this.serv.selectInterpretes().subscribe({
      next: res => this.interpretes = res,
      error: err => console.error(err)
    });
  }

  borrarInterprete(int:Interprete){
    if(confirm("¿Está seguro de que desea borrar al pobre " +int.nombre+"?")){
      this.serv.deleteInterprete(int).subscribe({
        next: results => this.interpretes = results,
        error: err => console.error(err)
      })
    }
  }

}
