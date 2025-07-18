import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../../../../Services/login-service.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  monForm : FormGroup

  @Output() closeDropDown = new EventEmitter<void>()

  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginServiceService
  ) {
    this.monForm = this.formBuilder.group({
      email : ['', [Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  send() {
    this.closeDropDown.emit()
    let email = this.monForm.get('email')?.value
    let password = this.monForm.get('password')?.value

    if(this.monForm.valid) {
      this.loginService.login(email, password)
    }

    else {

    }
  }

  logout() {
    this.loginService.logout()
  }
}
