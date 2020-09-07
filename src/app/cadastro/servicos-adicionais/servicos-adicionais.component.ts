import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-servicos-adicionais',
  templateUrl: './servicos-adicionais.component.html',
  styleUrls: ['./servicos-adicionais.component.scss']
})
export class ServicosAdicionaisComponent implements OnInit {

  formServicosAdicionais: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.createFormServicosAdicionais();
  }

  createFormServicosAdicionais(){
    this.formServicosAdicionais = this.fb.group({
      poupaParaMim: [false],
      voltaParaMim: [false]
    });
  }

  sendForm(){
    if (this.formServicosAdicionais.valid){
      this.route.navigate(['/cadastro/resumo']);
    } else {
      this.appService.showError('Preencha todos os campos');
    }
  }

}
