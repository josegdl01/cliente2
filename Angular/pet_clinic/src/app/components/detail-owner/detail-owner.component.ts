import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-detail-owner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.sass'
})
export class DetailOwnerComponent {

  public owner: Owner = {
    id:-1,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    telephone: "",
    pets: []

  };
  public id: number = this.ar.snapshot.params["id"];

  constructor(private ownerService: OwnerService, private ar: ActivatedRoute, private ruta: Router){
    this.ownerService.selectOwner(this.id).subscribe({
      next: result => this.owner = result,
      error: err => console.error(err)
    });
    
  }

  deleteOwner(id: number){
    id= this.id;
    if (confirm("¿Desea borrar a este dueño?")){
      this.ownerService.deleteOwner(id).subscribe({
        next: ok => console.log(ok),
        error: err => console.error(err)
      });
    }
    this.ruta.navigate(["/owner"]);
  }

  disableDelete(){
    
  }
}
