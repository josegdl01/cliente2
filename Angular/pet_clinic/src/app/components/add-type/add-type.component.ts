import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetType } from '../../models/pet-type';
import { PetTypeService } from '../../services/pet-type.service';

@Component({
  selector: 'app-add-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-type.component.html',
  styleUrl: './add-type.component.sass'
})
export class AddTypeComponent {
  @Output()
  public pafuera = new EventEmitter<PetType>();

  @Output()
  public pafuera2 = new EventEmitter<PetType>();
  
  @Input()
  public typeRecibido: PetType = <PetType>{

  };

  public type: PetType = <PetType>{};


  
  constructor(private typeService: PetTypeService) {
  }
  
  addModType(type: PetType) {
    console.log(type);
    let copyType: PetType;
    if(type.id){
      this.typeService.modType(type).subscribe({
        next: result => {
          console.log(result);
          copyType = type;
          this.pafuera2.emit()
        },
        error: err => console.error(err)
      });
    } else {
      this.typeService.insertType(type).subscribe({
        next: result => {
          console.log(result);
          this.pafuera.emit(result);
        },
        error: err => console.error(err)
      });
    }
  }
}
