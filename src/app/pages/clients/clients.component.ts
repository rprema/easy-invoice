import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
 clientItems: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.clientItems = [
      {
        clientName: 'CLIENT NAME',
        clientEmail: 'abc@xyz.com',
        clientPhone: '1234567890',
        clientCity: 'Miami'
      },
      {
        clientName: 'CLIENT NAME',
        clientEmail: 'qwerty@xyz.com',
        clientPhone: '2345678901',
        clientCity: 'New York'
      },
      {
        clientName: 'CLIENT NAME',
        clientEmail: 'asdfg@xyz.com',
        clientPhone: '3456789012',
        clientCity: 'California'
      },
      {
        clientName: 'CLIENT NAME',
        clientEmail: 'zxcvbn@xyz.com',
        clientPhone: '4567890123',
        clientCity: 'Dallas'
      },
    ];
  }

  onAddClient(){
    this.router.navigateByUrl('client-form');
  }
  onNavigateToClient(){
    this.router.navigateByUrl('client-form');
    }
}
