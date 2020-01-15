import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../services/app/app.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: any;

  constructor(private router: Router, private appService: AppService) {
  }

  ngOnInit() {
    this.clients = this.appService.getAllClients();
    console.log(`clients: `, this.clients);
  }

  onAddClient() {
    this.router.navigate(['clients', 'new']);
  }

  onNavigateToClient(item) {
    this.router.navigate(['clients', item.id]);
  }
}
