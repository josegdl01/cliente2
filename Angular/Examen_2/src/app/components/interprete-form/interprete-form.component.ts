import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interprete } from '../../models/interprete';
import { InterpreteService } from '../../services/interprete.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interprete-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interprete-form.component.html',
  styleUrl: './interprete-form.component.css'
})
export class InterpreteFormComponent {

  public interprete : Interprete = <Interprete>{};
  public textoBoton : string = "Añadir";
  private idInt: number;
  
  constructor(private serv: InterpreteService,private ruta: Router, private ar: ActivatedRoute){
    this.idInt = this.ar.snapshot.params["id"];

    if(this.idInt != -1){
      this.serv.selectInterprete(this.idInt).subscribe({
        next: res => {
          this.interprete = res,
          this.textoBoton = "Modificar"
        },
        error: err => console.error(err)
      });
    }else {
      this.interprete.id=-1;
    }
  }

  insertModInterprete(int: Interprete){
    if(int.id == -1){
      this.serv.insertInterprete(int).subscribe({
        next:result => { 
          if(result.result == "FAIL"){alert("Ha habido un problema al añadir un intérprete")}
         },
        error: err=> console.error(err)
      });
    } else {
      this.serv.updateInterprete(int).subscribe({
        next:result => { 
          if(result.result == "FAIL"){alert("Ha habido un problema al añadir un intérprete")}
         },
        error: err=> console.error(err)
      });
    }
    this.ruta.navigate(["interprete"]);
  }

  volver(){
    this.ruta.navigate(["interprete"]);
  }
}
