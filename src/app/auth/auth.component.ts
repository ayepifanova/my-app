import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'my-app';

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }
  getInfo(username1, password1) { 
    let registeredUser = false;
    let users = this.userService.getAll();
    users.forEach(user => {
      if (username1 === user.name && password1 == user.password) {
        registeredUser = true;
      }
    });
    if (registeredUser) {
        this.router.navigateByUrl(''); 
        return;
    } 
  }
}
//ng serve - for start. ng generate component (name) - to generate componenets or ng g c (name)
