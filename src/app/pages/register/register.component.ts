import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerEmail: any;
  registerPass: any;
  confirmPass: any;


  onSubmit(registerFormVariable) {
    console.log(registerFormVariable);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    console.log('Login button clicked');
    this.router.navigateByUrl('login');

  }

}
