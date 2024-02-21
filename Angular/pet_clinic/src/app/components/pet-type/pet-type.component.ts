import { Component } from '@angular/core';
import { PetType } from '../../models/pet-type';
import { PetTypeService } from '../../services/pet-type.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AddTypeComponent } from '../add-type/add-type.component';
import { Specialty } from '../../models/specialty';

@Component({
  selector: 'app-pet-type',
  standalone: true,
  imports: [FormsModule, RouterLink, AddTypeComponent],
  templateUrl: './pet-type.component.html',
  styleUrl: './pet-type.component.sass'
})
export class PetTypeComponent {

  public types: PetType[] = [];
  public showForm:boolean = false;
  
  public emitirType: PetType = <PetType>{};

  constructor(private typeService:PetTypeService) {
    this.typeService.selectTypes().subscribe({
      next: result => this.types = result,
      error: err => console.error(err)
    });
  }

  changeShowForm(){
    if(this.showForm){
      this.emitirType = <Specialty>{};
      this.showForm = !this.showForm;
    } else {
      this.showForm = !this.showForm;
    }
  }

  changeEditForm(){
    this.showForm = !this.showForm;
    this.emitirType = <PetType> {};
  }

  addType(event: PetType){
    this.types.push(event);
    this.changeShowForm();
  }

  modType(){
    this.changeShowForm();
  }

  deleteType(type: PetType){
    if(confirm("Se borrará el tipo: " +type.name)){
      this.typeService.deleteType(type).subscribe({
        next: result => {
          let re = <{result: string}> result;
          if(re.result == "OK"){
            this.types = this.types.filter(t => t != type);
          }
        },
        error : err => console.error(err)
      });
    }
  }

  enviarPetType(type: PetType){
    this.emitirType = type;
    this.changeShowForm();
  }
}
