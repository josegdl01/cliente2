import { Component} from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/owner';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { PetType } from '../../models/pet-type';
import { PetTypeService } from '../../services/pet-type.service';

@Component({
  selector: 'app-detail-owner',
  standalone: true,
  imports: [RouterLink, FormsModule],
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
  public banderaForm: boolean = false;
  public addButtonText: string = "Add new Pet";

  public pet: Pet = {
    id:-1,
    name: "ers",
    birth: new Date,
    owner: this.owner,
    type: {id:0, name:""}
  }

  public types: PetType[] =[];

  constructor(private ownerService: OwnerService,private typeService:PetTypeService , private petService: PetService, private ar: ActivatedRoute, private ruta: Router){
    this.ownerService.selectOwner(this.id).subscribe({
      next: result => this.owner = result,
      error: err => console.error(err)
    });
    
    this.typeService.selectTypes().subscribe({
      next: results => this.types = results,
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

  showForm(){
    if(this.banderaForm == false){
      this.banderaForm = true;
      this.addButtonText = "Cancel";
    } else {
      this.banderaForm = false;
      this.addButtonText = "Add new Pet";
    }
  }

  addPet(pet: Pet){
    this.petService.insertPet(pet).subscribe({
      next: result => console.log(result),
      error: err => console.error(err)
    });

    this.showForm();

    this.ruta.navigate(["/owner"]);
  }
}
