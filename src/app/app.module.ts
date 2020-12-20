import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { UsersService } from './users.service';
import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent,
    HomeComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
