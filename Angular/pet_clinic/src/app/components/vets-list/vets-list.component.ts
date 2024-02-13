import { Component } from '@angular/core';
import { Vet } from '../../models/vet';
import { VetService } from '../../services/vet.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vets-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vets-list.component.html',
  styleUrl: './vets-list.component.sass'
})
export class VetsListComponent {

  public vets: Vet[] = [];

  constructor(private vetService: VetService, private ar: ActivatedRoute, private ruta: Router){
     this.vetService.selectVets().subscribe({
      next: results => this.vets = results,
      error: err => console.error(err)
     }); 
  }

  deleteVet(vet: Vet){
    if(confirm("Se borrará al veterinario "+vet.firstName+ " "+vet.lastName)){
      this.vetService.deleteVet(vet.id).subscribe(result => {
        let re = <{result: string}> result;
        if(re.result == "OK"){
          this.vets = this.vets.filter(vete => vete != vet);
        }
      }
      );
      this.ruta.navigate(["/vet"]);
    }
  }
}
