import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.userProfile();
  }

  logout() {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }
}
