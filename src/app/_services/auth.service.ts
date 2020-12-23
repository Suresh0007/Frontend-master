import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  // tslint:disable-next-line:typedef
  sendToken(token: string){
    localStorage.setItem('loggedIn', token);
  }
  // tslint:disable-next-line:typedef
  getToken(){
    return localStorage.getItem("loggedInuser");
}
  // tslint:disable-next-line:typedef
  isLoggedIn(){
    return this.getToken() !== null;
  }
  // tslint:disable-next-line:typedef
  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
}
}
