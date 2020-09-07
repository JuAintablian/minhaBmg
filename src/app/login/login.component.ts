import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.createFormLogin();
  }

  createFormLogin(){
    this.formLogin = this.fb.group({
      cnpj: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  logIn(){
    if (this.formLogin.valid) {
      this.route.navigate(['minha-bmg']);
    }
  }

}
