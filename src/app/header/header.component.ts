import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ,
               private auth: AuthService) { }
  public now: Date = new Date();


  // tslint:disable-next-line:typedef
  getTime(){
    setInterval(() => {
      this.now = new Date();
    }, 1);
}
// tslint:disable-next-line:typedef
logout(){
  this.auth.logout();
}
// tslint:disable-next-line:typedef
  ngOnInit(): void {
  }

}
