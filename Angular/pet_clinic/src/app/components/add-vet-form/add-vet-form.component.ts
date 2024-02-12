import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-vet-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-vet-form.component.html',
  styleUrl: './add-vet-form.component.sass'
})
export class AddVetFormComponent {

  public vet: Vet = {
    id: -1,
    firstName: "nombre",
    lastName: "apellidos"
  }

  public idVet: number;

  constructor(private vetService: VetService, private ar: ActivatedRoute, private ruta: Router){
    this.idVet = this.ar.snapshot.params["id"];
    
    if(this.idVet != -1){
      this.vetService.selectVetById(this.idVet).subscribe({
        next: res => this.vet = res,
        error: err => console.error(err)
      });
    }
  }

  insertModVet(vet:Vet){
    if(this.idVet != -1){
      this.vetService.updateVet(vet).subscribe({
        next: res => console.log(res),
        error: err => console.error(err)
      });
    }else {
      this.vetService.insertVet(vet).subscribe({
        next: res => console.log(res),
        error: err => console.error(err)
      });
    }

    this.ruta.navigate(["/vet"]);
  }
  
  deleteVet(id: number){
    if(confirm("Se borrará al veterinario "+this.vet.firstName+ " "+this.vet.lastName)){
      this.vetService.deleteVet(id).subscribe({
        next: res => console.log(res),
        error: err => console.error(err)
      });
      this.ruta.navigate(["/vet"]);
    }
  }
}
