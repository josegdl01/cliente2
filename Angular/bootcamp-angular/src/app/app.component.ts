import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootcamp-angular';

  public componente: string;
  public query: string;
  public result: string;
  public msgEventSearch: string = "";

  constructor() {
    this.componente = "Parámetro de entrada";
    this.query = "";
    this.result = "";
  }

  search(event: any) {
    this.msgEventSearch = event.query + ' => ' + event.resultado;
  }
}
