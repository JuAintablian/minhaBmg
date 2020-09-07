import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-informacoes-emprestimo',
  templateUrl: './informacoes-emprestimo.component.html',
  styleUrls: ['./informacoes-emprestimo.component.scss']
})
export class InformacoesEmprestimoComponent implements OnInit {

  formInformacoesEmprestimo: FormGroup;
  formaPagamento = [
    { label: 'Parcelas fixas', value: 'A'},
    { label: 'Reinvestindo', value: 'B'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createFormInformacoesEmprestimo();
  }

  createFormInformacoesEmprestimo(){
    this.formInformacoesEmprestimo = this.fb.group({
      valorEmprestimo: [null, Validators.required],
      formaPagamento: [null, Validators.required]
    });
  }

  sendForm(){
    if (this.formInformacoesEmprestimo.valid){
      this.route.navigate(['/cadastro/servicos-adicionais']);
    } else {
      this.appService.showError('Preencha todos os campos');
    }
  }

}
