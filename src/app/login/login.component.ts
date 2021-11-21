import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";
  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  login(){
    this._loginService.logMeIn(this.username,this.password);
  }

}
