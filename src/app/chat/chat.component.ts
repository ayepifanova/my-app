import {
  Component,
  OnInit
} from '@angular/core';
import { UsersService } from '../users.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  constructor(private messagesService: MessagesService) {} 
  public messages = this.messagesService.getAll();

  ngOnInit(): void {}
  //private is used only in this document, public can be exported and used in other documents

  sendMessage(msgText) {
    //if (!msgText) return; //logical denial
    let role = 'p';
    let personName = this.messagesService.getName(role);
    let personImg = this.messagesService.getImage(role);
    let messageData = {
      name: personName,
      img: personImg,
      side: 'right-msg',
      text: msgText
    }
    this.messages.push(messageData);

    //msgText = ''; 
    //chat.appendChild(msg); //appendChild adds something to HTML file 
    this.botResponse(this.messages);
  };
  private botResponse(messages) {
    let botMessages = this.messagesService.getAllBotMessages();
    let role = 'b';
    let botName = this.messagesService.getName(role);
    let botImg = this.messagesService.getImage(role);
    const r = this.random(0, botMessages.length - 1);
    const msgText = botMessages[r];
    const delay = msgText.split(" ").length * 100;
    let message = {
      name: botName,
      img: botImg,
      side: 'left-msg',
      text: msgText
    }
    setTimeout(() => {
    messages.push(message);
    }, delay);
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
