import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

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


  constructor() {
  }

  ngOnInit() {
  }
}
