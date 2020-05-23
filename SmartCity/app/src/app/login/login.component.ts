import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private service : RegistrationService ,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        this._router.navigate(['/user'])
      },
      error=>{
        console.log("Exception Occured");
      this.msg = "bad credential please enter valid emailid and password";
    }
    )
  }

  gotoRegistration(){
    console.log("registration works recieved");
    this._router.navigate(['/registration'])
  }
}
