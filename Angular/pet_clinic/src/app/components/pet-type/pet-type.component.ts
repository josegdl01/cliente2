import { Component } from '@angular/core';
import { PetType } from '../../models/pet-type';
import { PetTypeService } from '../../services/pet-type.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AddTypeComponent } from '../add-type/add-type.component';

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

  constructor(private typeService:PetTypeService) {
    this.typeService.selectTypes().subscribe({
      next: result => this.types = result,
      error: err => console.error(err)
    });
  }

  changeShowForm(){
    this.showForm = !this.showForm;
  }

  addType(event: PetType){
    this.types.push(event);
    this.changeShowForm();
  }

  deleteType(type: PetType){
    if(confirm("Se borrará eñ tipo: " +type.name)){
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
}
