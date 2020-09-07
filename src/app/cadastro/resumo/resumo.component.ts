import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  dados = {
    empresa: {
      cnpj: '12.333.444/0001-55',
      razaoSocial: 'Loja da Maria',
      tipoEmpresa: 'MEI',
      telefone: '(11) 2368-8956',
      anos: 3
    },
    representante: {
      tipo: 'Acionista',
      nome: 'Maria da Silva',
      cpf: '352.632.125-85',
      rg: '20.365.058-9',
      telefone: '(11) 97458-8895',
      sexo: 'F',
      administrador: true,
      socio: {
        tipo: 'Acionista',
        nome: 'João da Silva',
        cpf: '447.558.365-98',
        rg: '45.256.029-9',
        telefone: '(11) 97458-9688',
        sexo: 'M',
        administrador: false,
      }
    },
    adicionais: {
      renda: '9.685,00',
      funcionarios: true,
      qtdFuncionarios: '3'
    },
    emprestimo: {
      valor: '130.000,00',
      formaPagamento: 'Reinvestido'
    },
    servicosAd: {
      poupa: true,
      volta: false
    }
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToAnalise() {
    this.route.navigate(['/analise-credito']);
  }

}
