import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  @Input() public planeta: any;
}
