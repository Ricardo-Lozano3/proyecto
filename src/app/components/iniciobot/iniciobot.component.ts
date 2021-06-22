import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciobot',
  templateUrl: './iniciobot.component.html',
  styleUrls: ['./iniciobot.component.css']
})
export class IniciobotComponent implements OnInit {

  public datosUsuario: FormGroup

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
  }

  inicializarUsuario(){
    this.datosUsuario = this.formBuilder.group({
      nombreCompleto: [ '', [ Validators.required, Validators.pattern('([a-zA-Z ñ]+) ([a-zA-Z ñ]+)'), Validators.minLength(3) ] ],
      empresa: [ '', [ Validators.required, Validators.minLength(3), Validators.pattern('([a-zA-Z ñ]+)') ] ],
      username: [ '', Validators.required ],
      email: [ '', Validators.required, Validators.minLength(5), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ],
      contraseña: [ '', [ Validators.required ] ],
      contraseñaConfirm: [ '', [ Validators.required ] ]
    })
  }

}
