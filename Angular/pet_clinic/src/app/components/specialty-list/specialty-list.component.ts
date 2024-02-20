import { Component } from '@angular/core';
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

  constructor(private specService: SpecialtyService,
              private ruta: Router,
              private ar: ActivatedRoute) {

                this.specService.selectSpecialties().subscribe({
                  next: results => this.specs = results,
                  error: err => console.error(err)
                });
  }

  changeShowForm(){
    this.showForm = !this.showForm;
  }
}
