import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import invoices from '../../invoices';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.invoices = invoices;
    console.log(`invoices: `, invoices);
  }


  onAddInvoice() {
    this.router.navigateByUrl('invoice-form');
  }

  onNavigateToInvoice() {
    this.router.navigateByUrl('invoice-form');
  }

  getClientName(item) {
    let clientId = item.clientId || '';

    if (clientId) {
      return 'Client Name';
    }

  }

  getInvoiceAmount(item) {
    let amount = 0;

    item.invoiceItems.forEach((invoiceItem) => {
      amount = amount + (invoiceItem.cost * invoiceItem.quantity);
    });

    return amount;
  }


}
