import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  IsLogged = signal(false)
  IsAdmin = signal(false)

  constructor() { 
    
  }


  login(email : string, password : string) {
    if (email === 'willuc.KaizenTech@gmail.com') {
      if (password === 'KaizenTechForLife24') {
        this.IsAdmin.set(true)
        this.IsLogged.set(true)
      }
    }
    else {

    }
  }

  logout() {
    this.IsAdmin.set(false)
    this.IsLogged.set(false)
  }
}
