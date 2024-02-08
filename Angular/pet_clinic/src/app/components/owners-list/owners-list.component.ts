import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-owners-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './owners-list.component.html',
  styleUrl: './owners-list.component.sass'
})
export class OwnersListComponent {

  public owners: Owner[] = [];
  constructor(private ownerService:OwnerService, private ruta: Router){
    this.ownerService.selectOwners().subscribe({
      next: results => this.owners = results,
      error: err => console.error(err)
    });
  }

}
