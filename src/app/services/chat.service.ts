import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  
  constructor(private afs: AngularFirestore) {}

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(100));
    return this.itemsCollection
      .valueChanges()
      .pipe(

        map((mensajes: Mensaje[]) => {

          this.chats = [];

          for (let mensaje of mensajes) {
            this.chats.unshift(mensaje);
          }

          return this.chats;
        })

      )
  }

  agregarMensaje(texto: string) {
    let msg: Mensaje = {
      nombre: 'And',
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: 'adsjlkajsdkfjalsdj'
    }

    return this.itemsCollection.add(msg);
  }

}
