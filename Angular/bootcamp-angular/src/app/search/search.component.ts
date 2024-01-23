import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public query: string;
  public result: string;
  @Input()
  public labelButton: string;
  @Input()
  public placeholder: string;
  @Output()
  searchEvent = new EventEmitter();

  constructor() {
    this.query = "";
    this.result = "";
    this.labelButton = "";
    this.placeholder = "";
  }

  search() {
    this.result = 'Consulta realizada con query \"' + this.query + '\"';
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }
}
