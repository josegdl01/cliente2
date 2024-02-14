import { Component } from '@angular/core';
import { PetType } from '../../models/pet-type';
import { PetTypeService } from '../../services/pet-type.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-type',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './pet-type.component.html',
  styleUrl: './pet-type.component.sass'
})
export class PetTypeComponent {

  public types: PetType[] = [];

  constructor(private typeService:PetTypeService) {
    this.typeService.selectTypes().subscribe({
      next: result => this.types = result,
      error: err => console.error(err)
    });
  }

}
