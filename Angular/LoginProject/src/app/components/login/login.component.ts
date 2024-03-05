import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public login: FormGroup;

  public email: string;
  public password: string;

  constructor(private fb: FormBuilder, private serv: LoginService, private route: Router){

    this.login = this.fb.group({
      email: this.fb.control("rigo@mail.com", Validators.required),
      password: this.fb.control("rigo", Validators.required)
    });

    this.email="";
    this.password="";
  }

  loginGorfo(valores: any){
    this.serv.getLogin(valores).subscribe({
      next: datos => {
        console.log(datos);
        localStorage.setItem("JWT", datos.JWT),
        this.route.navigate([""]);
      },
      error: err => console.error(err)
    });
  }
}
