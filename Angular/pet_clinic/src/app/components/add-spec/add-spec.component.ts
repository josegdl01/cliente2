import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() pafuera = new EventEmitter();

  @Input() specRecibido:Specialty = <Specialty> {};

  @Output() pafuera2 = new EventEmitter();

  constructor(private specServ: SpecialtyService){

  }

  insertSpec(spec : Specialty){
    if(this.specRecibido.id == null){
      this.specServ.insertSpecialty(this.specRecibido).subscribe({
        next: res => this.pafuera.emit(res),
        error: err => console.error(err)
      })
    } else {
      this.specServ.modSpecialty(this.specRecibido).subscribe({
        next: res => {
          this.pafuera2.emit(res)
        },
        error: err => console.error(err)
      })
    }
    
  }

}
