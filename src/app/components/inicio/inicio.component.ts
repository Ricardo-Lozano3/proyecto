import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-carousel-lib/public_api';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../css/style.css','../css/maicons.css','../css/animate.css']
})
export class InicioComponent implements OnInit {

  public modal;
  display = 'none';

  constructor() { }

  ngOnInit() {
    document.getElementById('btnModal').click();
  }
}
