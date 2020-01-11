import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  emailAddress: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(`formData`);
  }

  onLogin() {
    console.log('Login button clicked');
    this.router.navigateByUrl('login');

  }

}
