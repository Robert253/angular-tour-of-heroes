import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    //Creating a messages string array
    messages: string[] = [];

  constructor() { }

      add(message: string) {
        this.messages.push(message);
      }

      clear() {
        this.messages = [];
      }
}
