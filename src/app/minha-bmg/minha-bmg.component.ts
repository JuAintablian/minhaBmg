import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-bmg',
  templateUrl: './minha-bmg.component.html',
  styleUrls: ['./minha-bmg.component.scss']
})
export class MinhaBmgComponent implements OnInit {

  servicos = [
    { servico: 'Transferir', icon: 'multiple_stop' },
    { servico: 'Pagar', icon: 'payment' },
    { servico: 'Adicionar funcionário', icon: 'person_add' },
    { servico: 'Serviços', icon: 'fact_check' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
