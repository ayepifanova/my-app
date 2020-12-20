import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user = {
    name: "Vasya",
    password: "Pupkin",
    "user-id": 7
  }
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goToRoute(path) {
    this.router.navigate([path]);
  }
}
