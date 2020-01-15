import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../services/app/app.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices: any;
  currentFilter: any = 'ALL';

  constructor(
    private router: Router,
    private appService: AppService
  ) {
  }

  ngOnInit() {
    this.getInvoices();
  }

  async getInvoices() {
    try {
      this.invoices = await this.appService.getAllInvoices();
    } catch (err) {
      console.log(err);
    }
    console.log(`invoices: `, this.invoices);
  }


  onAddInvoice() {
    this.router.navigate(['invoices', 'new']);
  }

  onNavigateToInvoice(item) {
    this.router.navigate(['invoices', item.id]);
  }

  getInvoiceAmount(item) {
    let amount = 0;

    item.invoiceItems.forEach((invoiceItem) => {
      amount = amount + (invoiceItem.cost * invoiceItem.quantity);
    });

    return amount;
  }

  onUpdateFilter(statusId) {
    this.currentFilter = statusId;
    this.getInvoices().then(() => {
      if (statusId !== 'ALL') {
        this.invoices = this.invoices.filter((item) => item.invoiceStatus === statusId);
      }
    });
  }


}
