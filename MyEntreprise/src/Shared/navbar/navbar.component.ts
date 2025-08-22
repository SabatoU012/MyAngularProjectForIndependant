import { Component, signal,} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginServiceService } from '../../Services/login-service.service';

@Component({
  selector: 'app-navbar',
  imports: [
    NgbDropdownModule,
    RouterLink,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  img = 'newlogo.png'

  IsOpen : boolean = false
  IsLogged = signal(false)

  constructor(
    private loginService : LoginServiceService,
    private router : Router
  ) {
    this.IsLogged = this.loginService.IsLogged
  }

  toggleDown() {
    this.IsOpen = !this.IsOpen
  }

  logout() {
    this.loginService.logout()
  }

  NavigateToAbout() {
    this.router.navigateByUrl('home/about')
  }
}
