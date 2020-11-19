import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  public mensaje:string = "";
  
  constructor() { }

  ngOnInit(): void {}

  enviarMensaje(){
    console.log(this.mensaje);
  }
}
