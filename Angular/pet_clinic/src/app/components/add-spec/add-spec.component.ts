import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../models/specialty';
import { SpecialtyService } from '../../services/specialty.service';

@Component({
  selector: 'app-add-spec',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-spec.component.html',
  styleUrl: './add-spec.component.sass'
})
export class AddSpecComponent {

  public spec: Specialty = <Specialty>{};

  @Output() pafuera = new EventEmitter();

  constructor(private specServ: SpecialtyService){

  }

  insertSpec(spec : Specialty){
    this.specServ.insertSpecialty(spec).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    })
  }

}
