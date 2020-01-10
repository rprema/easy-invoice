import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginName: any;
  loginPass: any;
  form: FormGroup;

  onSubmit(formVariable) {
    console.log(formVariable);
  }


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loginName = 'email@domain.com';
    this.loginPass = 'P@ssword12';
  }

  onLogin() {
    console.log('Login button clicked!');
    this.router.navigateByUrl('invoices');
  }
}
