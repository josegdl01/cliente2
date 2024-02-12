import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-add-owner-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-owner-form.component.html',
  styleUrl: './add-owner-form.component.sass'
})
export class AddOwnerFormComponent {

  public idOwner: number;

  public owner: Owner = {
    id:-1,
    firstName:"Nombre",
    lastName:"Apellido",
    address: "Dirección",
    city: "Ciudad",
    telephone: "Teléfono",
    pets: []

  }

  constructor(private ownerService: OwnerService, private ar:ActivatedRoute, private ruta: Router){
    this.idOwner = ar.snapshot.params["id"];

    if(this.idOwner != -1){
      this.ownerService.selectOwner(this.idOwner).subscribe({
        next: result => this.owner = result,
        error: err => console.error(err)
      });
    }
  }

  insertModOwner(owner: Owner){
    console.log("ONSUBMITFORM: ", owner);

    if(owner.id != -1){
      this.ownerService.updateOwner(owner).subscribe({
        next: result => console.log("Dueño modificado", result),
        error: err => console.error(err)
      });
      this.ruta.navigate(["/owner"]);
    }else {
      this.ownerService.insertOwner(owner).subscribe({
        next: result => console.log("Dueño insertado", result),
        error: err => console.error(err)
      });
      this.ruta.navigate(["/owner"]);
    }
  }
}
