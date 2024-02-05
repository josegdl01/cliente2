import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public personas: Persona[];

  constructor(private pAjax: PAjaxService, private ruta: Router, private ar:ActivatedRoute) {
    this.personas = [];
  }

  // ngOnInit(){
  //   this.pAjax.selectAll().subscribe({
  //     next: res => this.personas = res,
  //     error:error => console.error(error)
  //   })
  // }

  ngOnInit(){
    this.pAjax.selectAll().subscribe(res => {
      this.personas = res;
      console.log(res)
    });
    }

    insertFormRoute(){
      this.ruta.navigate(["personas-add", -1]);
    }
  }

