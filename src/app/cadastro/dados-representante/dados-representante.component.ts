import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-dados-representante',
  templateUrl: './dados-representante.component.html',
  styleUrls: ['./dados-representante.component.scss']
})
export class DadosRepresentanteComponent implements OnInit {

  formDadosRepresentante: FormGroup;
  formDadosSocio: FormGroup;
  haveSocio = false;

  tipoRepresentantes = [
    { label: 'Acionista', value: '1'},
    { label: 'Sócio', value: '2'},
    { label: 'Cotista', value: '3'},
    { label: 'Proprietário', value: '4'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createFormDadosRepresentante();
    this.createFormDadosSocio();
  }

  createFormDadosRepresentante(){
    this.formDadosRepresentante = this.fb.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
      CPF: [null, Validators.required],
      RG: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      administrador: [false]
    });
  }

  createFormDadosSocio(){
    this.formDadosSocio = this.fb.group({
      nomeSocio: [null],
      CPFSocio: [null],
      RGSocio: [null],
      telefoneSocio: [null],
      sexoSocio: [null],
      administradorSocio: [false]
    });
  }

  sendForm(){
    if (this.haveSocio) {
      if (this.formDadosRepresentante.valid && this.formDadosSocio.valid){
        this.route.navigate(['/cadastro/informacoes-adicionais']);
      } else {
        this.appService.showError('Preencha todos os campos');
      }
    } else if (this.formDadosRepresentante.valid) {
      this.route.navigate(['/cadastro/informacoes-adicionais']);
    } else {
      this.appService.showError('Preencha todos os campos');
    }
  }

  addSocio(){
    this.haveSocio = true;
    this.createFormDadosSocio();
    this.formDadosSocio.get('nomeSocio').setValidators([Validators.required]);
    this.formDadosSocio.get('CPFSocio').setValidators([Validators.required]);
    this.formDadosSocio.get('RGSocio').setValidators([Validators.required]);
    this.formDadosSocio.get('telefoneSocio').setValidators([Validators.required]);
    this.formDadosSocio.get('sexoSocio').setValidators([Validators.required]);
  }

  removeSocio(){
    this.haveSocio = false;
    this.formDadosSocio.reset();
  }

}
