import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../css/style.css','../css/maicons.css','../css/animate.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }
  prevenirFundacion() {
    window.location.href = 'http://www.prevenirexpress.com/inicio';

  }
  optica() {
    window.location.href = 'http://optica.prevenirexpress.com/';
  }

  descuentos() {
    window.location.href = 'http://citas.prevenirexpress.com/#/info-noticias';
}
}
