import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
  private PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
  private BOT_NAME = "BOT";
  private PERSON_NAME = "Sasha";
  public messages = [{
    name: this.BOT_NAME,
    img: this.BOT_IMG,
    side: 'left-msg',
    text: 'Hi, welcome to SimpleChat! Go ahead and send me a message. 😄'
  },
  // create a new service (ng g s messages), where you write all of the messages (like users) where you used getAll
  {
    name: this.PERSON_NAME,
    img: this.PERSON_IMG,
    side: 'right-msg',
    text: 'You can change your name in JS section!'
  },
  {
    name: this.BOT_NAME,
    img: this.BOT_IMG,
    side: 'left-msg',
    text: 'I like to play games... But I don\'t know how to play!'
  }
]
private BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

  constructor() { }
  public getAll() {
    return this.messages;
  }
  public getAllBotMessages() {
    return this.BOT_MSGS;
  }
  public getName(role) {
    if (role === 'p') {
      return this.PERSON_NAME; 
    } else if (role === 'b') {
      return this.BOT_NAME
    } else return;
  }
  public getImage(role) {
    if (role === 'p') {
      return this.PERSON_IMG; 
    } else if (role === 'b') {
      return this.BOT_IMG
    } else return;
  }
}
