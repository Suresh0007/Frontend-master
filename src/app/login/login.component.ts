import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              // tslint:disable-next-line:variable-name
              private _auth: AuthService
              ) { }

  // tslint:disable-next-line:typedef
  validateLogin(){
    this.submitted = true;
    if (this.loginform.valid){
      console.log(this.loginform.value);
      this._auth.sendToken(this.loginform.value.email);
      this.router.navigate(['console/dashboard']);
    }
  }

  ngOnInit(): void {

    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
