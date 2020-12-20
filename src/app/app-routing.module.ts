import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [ //Routes is a type and routes is a const (see line 12)
  {path: '', component: HomeComponent},
  {path:'auth', component: AuthComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'calc', component: CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
