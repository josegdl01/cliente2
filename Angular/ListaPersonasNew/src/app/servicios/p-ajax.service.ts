import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  constructor(private peticion: HttpClient) { }
}
