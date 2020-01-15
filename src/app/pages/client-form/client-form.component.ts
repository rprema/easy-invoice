import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../services/app/app.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  itemId: any;
  clientData: any = {};
  isNew = true;

  onSubmit(clientFormData) {
    console.log(`clientFormData: `, clientFormData);

  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {
    this.itemId = route.snapshot.paramMap.get('itemId');
  }

  ngOnInit() {
    this.getClientData();
  }

  onNavigateClients() {
    this.router.navigateByUrl('clients');
  }

  getClientData() {
    if (this.itemId && this.itemId !== 'new') {
      this.isNew = false;
      this.clientData = this.appService.getClient(this.itemId);
    } else {
      this.clientData = {};
    }
  }

}
