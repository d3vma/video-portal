import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public disabled = false;
  public error = '';
  public loading = false;
  // @Input() hash;
  // hash = Md5.hashStr("password");
  // console.log(hash);
  public password;

  constructor(
    private authService: AuthService,
    private router: Router,
    private md5: Md5
  ) { }

  ngOnInit() {

  }

  login(f) {
    this.disabled = true;
    this.error = '';
    this.loading = true;
    // this.password = Md5.hashStr(this.password);
    this.authService.authenticateUser(f.value)
      .subscribe(
        data => {
          this.password = Md5.hashStr(this.password);
          console.log(this.password);
          if (data.status == 'success') {
            localStorage.setItem('username', data.username);
            localStorage.setItem('sessionId', data.sessionId);
            this.router.navigate(['']);
          } else {
            this.disabled = false;
            this.loading = false;
            this.error = data.error;
          }
        },
        error => {
          this.disabled = false;
          this.loading = false;
          this.error = "An error has been occurred";
          console.log("Error", error);
        }
       );
  }

}
