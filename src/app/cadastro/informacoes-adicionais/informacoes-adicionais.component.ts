import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-informacoes-adicionais',
  templateUrl: './informacoes-adicionais.component.html',
  styleUrls: ['./informacoes-adicionais.component.scss']
})
export class InformacoesAdicionaisComponent implements OnInit {

  formInformacoesAdicionais: FormGroup;
  haveFuncionarios = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createFormInformacoesAdicionais();
  }

  createFormInformacoesAdicionais(){
    this.formInformacoesAdicionais = this.fb.group({
      rendaMensal: [null, Validators.required],
      possuiFuncionarios: [null],
      qtdFuncionarios: [null]
    });
  }

  sendForm(){
    if (this.formInformacoesAdicionais.valid){
      this.route.navigate(['/cadastro/informacoes-emprestimo']);
    } else {
      this.appService.showError('Preencha todos os campos');
    }
  }

  onChangeFuncionarios(event) {
    this.haveFuncionarios = event.checked;

    if (event.checked){
      this.formInformacoesAdicionais.get('qtdFuncionarios').setValidators([Validators.required]);
    } else {
      this.formInformacoesAdicionais.get('qtdFuncionarios').setValidators(null);
      this.formInformacoesAdicionais.get('qtdFuncionarios').reset();
    }
  }

}
