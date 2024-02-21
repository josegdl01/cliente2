import { Component, EventEmitter, Output } from '@angular/core';
import { SpecialtyService } from '../../services/specialty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from '../../models/specialty';
import { AddSpecComponent } from '../add-spec/add-spec.component';

@Component({
  selector: 'app-specialty-list',
  standalone: true,
  imports: [AddSpecComponent],
  templateUrl: './specialty-list.component.html',
  styleUrl: './specialty-list.component.sass'
})
export class SpecialtyListComponent {

  public specs : Specialty[] = [];

  public showForm: boolean = false;

  public specOut = <Specialty>{};

  constructor(private specService: SpecialtyService,
              private ruta: Router,
              private ar: ActivatedRoute) {

                this.specService.selectSpecialties().subscribe({
                  next: results => this.specs = results,
                  error: err => console.error(err)
                });
  }

  changeShowForm(){
    if(this.showForm){
      this.showForm = !this.showForm;
      this.specOut = <Specialty>{};
    } else {
      this.showForm = !this.showForm;
    }
  }

  addSpec(spec: Specialty){
    this.specs.push(spec);
    this.changeShowForm();
  }

  deleteVaina(spec: Specialty){
    this.specService.deleteSpecialty(spec).subscribe({
      next: res => {
        let result = <String> res;
        if(result = "OK"){
          this.specs = this.specs.filter( element => element != spec)
        }
      },
      error: err => console.log(err)
    });
  }

  sendSpec(spec: Specialty){
    this.specOut = spec;
    this.changeShowForm();
  }

  modSpec(spec: Specialty){
    this.changeShowForm();
  }
}
