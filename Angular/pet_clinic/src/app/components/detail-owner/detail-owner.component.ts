import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from '../../services/owner.service';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-detail-owner',
  standalone: true,
  imports: [],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.sass'
})
export class DetailOwnerComponent {

  public owner: Owner = {
    id:-1,
    firstName: "",
    lastName: "",
    firstName: ""
  };
  public id: number = this.ar.snapshot.params["id"];

  constructor(private ownerService: OwnerService, private ar: ActivatedRoute){
    this.ownerService.selectOwner(this.id).subscribe({
      next: result => this.owner = result,
      error: err => console.error(err)
    });
  }
}
