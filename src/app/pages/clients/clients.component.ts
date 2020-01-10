import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import clients from '../../clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
 clients: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.clients = clients;
    console.log(`clients: `, clients);
  }

  onAddClient(){
    this.router.navigateByUrl('client-form');
  }
  onNavigateToClient(){
    this.router.navigateByUrl('client-form');
    }
}
