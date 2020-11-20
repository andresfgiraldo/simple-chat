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
  private el: any;
  
  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe((mensajes)=>{
      
      setTimeout(() => {
          this.el.scrollTop = this.el.scrollHeight
        }, 20)
    });
   }

  ngOnInit(): void {
    this.el = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    if (this.mensaje.length == 0)
        return;

    this._cs.agregarMensaje(this.mensaje)
      .then(() => { 
        this.mensaje = "";
      })
      .catch((e) => { console.log("error al guardar", e) })

    return;
  }
}
