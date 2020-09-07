import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dados-empresa',
  templateUrl: './dados-empresa.component.html',
  styleUrls: ['./dados-empresa.component.scss']
})
export class DadosEmpresaComponent implements OnInit {

  formDadosEmpresa: FormGroup;

  tiposEmpresa = [
    { label: 'Sociedade Limitada Unipessoal', value: 'SLU'},
    { label: 'Sociedade Anônima', value: 'SA'},
    { label: 'Sociedade Simples', value: 'SS'},
    { label: 'Sociedade Empresária Limitada', value: 'SEL'},
    { label: 'Empresário Individual', value: 'EI'},
    { label: 'MEI', value: 'MEI'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createFormDadosEmpresa();
  }

  createFormDadosEmpresa(){
    this.formDadosEmpresa = this.fb.group({
      CNPJ: [null, Validators.required],
      razaoSocial: [null, Validators.required],
      tipoEmpresa: [null, Validators.required],
      telefoneComercial: [null, Validators.required],
      tempoDeEmpresa: [null, Validators.required]
    });
  }

  sendForm(){
    if (this.formDadosEmpresa.valid){
      this.route.navigate(['/cadastro/dados-representantes']);
    } else {
      this.appService.showError('Preencha todos os campos');
    }
  }

}
