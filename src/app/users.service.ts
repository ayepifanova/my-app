import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [ // private to protect our data
    { 
    name: "Vasya",  
    surname: "Pupkin",
    password: "1234",
    id: 7 
  },
  {
    name: "Tanya",  
    surname: "Petrova",
    password: "123",
    id: 4 
  },
  {
    name: "Kolya",  
    surname: "Ivanov",
    password: "12345",
    id: 8
  }
]
  constructor() {}

  public getAll () {
    return this.users;
  }
  
}  
