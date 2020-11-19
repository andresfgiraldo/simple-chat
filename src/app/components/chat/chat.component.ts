import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  public mensaje:string = "";
  
  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe((mensajes)=>{
      console.log(mensajes);
    })
   }

  ngOnInit(): void {}

  enviarMensaje(){
    console.log(this.mensaje);
  }
}
