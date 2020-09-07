import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analise-credito',
  templateUrl: './analise-credito.component.html',
  styleUrls: ['./analise-credito.component.scss']
})
export class AnaliseCreditoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.route.navigate(['login']);
  }
}
