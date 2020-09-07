import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  beneficios = [
    { label: 'Conta isenta de mensalidades' },
    { label: 'Empréstimo' },
    { label: 'Maquina de cartão' },
    { label: 'Cheque especial' },
    { label: 'Cartão de crédito empresarial' },
    { label: 'Conta para seus colaboradores' },
    { label: 'Programa "Poupa para mim"'},
    { label: 'Programa "Volta para mim"'},
    { label: 'Auxílio para melhor investimentos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
