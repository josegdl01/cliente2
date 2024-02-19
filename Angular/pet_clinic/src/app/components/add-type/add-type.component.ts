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
  
  @Input()
  public type: PetType = <PetType>{};


  
  constructor(private typeService: PetTypeService) {
  }
  
  addModType(type: PetType) {
    console.log(type);
    this.typeService.insertType(type).subscribe({
      next: result => {
        console.log(result);
        this.pafuera.emit(result)
      },
      error: err => console.error(err)
    });
  }
}