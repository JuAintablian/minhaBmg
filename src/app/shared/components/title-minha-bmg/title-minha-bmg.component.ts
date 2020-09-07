import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-minha-bmg',
  templateUrl: './title-minha-bmg.component.html',
  styleUrls: ['./title-minha-bmg.component.scss']
})
export class TitleMinhaBmgComponent implements OnInit {

  @Input() internetBanking: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
