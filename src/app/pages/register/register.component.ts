import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
