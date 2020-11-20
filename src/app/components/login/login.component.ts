import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor(public _cs: ChatService) { }

  ngOnInit(): void {
  }

  ingresar(tipo: string) {
    this._cs.login(tipo);
  }

}
