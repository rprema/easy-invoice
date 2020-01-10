import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clientName: any;
  clientEmail: any;
  clientPhone: any;
  clientAddress: any;
  clientCity: any;
  clientState: any;

  onSubmit(clientFormData) {
    console.log(`clientFormData: `, clientFormData);

  }

  constructor() { }

  ngOnInit() {
  }

}
