import { Component } from '@angular/core';
import { Vet } from '../../models/vet';
import { VetService } from '../../services/vet.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vets-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vets-list.component.html',
  styleUrl: './vets-list.component.sass'
})
export class VetsListComponent {

  public vets: Vet[] = [];

  constructor(private vetService: VetService, private ar: ActivatedRoute){
     this.vetService.selectVets().subscribe({
      next: results => this.vets = results,
      error: err => console.error(err)
     }); 
  }
}
