import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn=false;
  constructor() { }
  logMeIn(username:string,password:string){
      if((username=="sky") && (password="1234")){
        alert("Logged In");
        this.isLoggedIn=true;
      }
  }
}
