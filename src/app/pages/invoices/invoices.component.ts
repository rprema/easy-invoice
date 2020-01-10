import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoiceItems: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.invoiceItems = [
      {
        invoiceName: 'INVOICE NAME',
        invoiceDate: 'Sept 11, 2019',
        invoiceStatus: 'Draft',
        invoiceClient: 'Genesys',
        invoiceAmount: '$20000',
      },
      {
        invoiceName: 'INVOICE NAME',
        invoiceDate: 'Oct 20, 2018',
        invoiceStatus: 'Overdue',
        invoiceClient: 'Sandhills',
        invoiceAmount: '$30000',
      },
      {
        invoiceName: 'INVOICE NAME',
        invoiceDate: 'Jan 01, 2020',
        invoiceStatus: 'Paid',
        invoiceClient: 'Metric Systems',
        invoiceAmount: '$56983',
      },
      {
        invoiceName: 'INVOICE NAME',
        invoiceDate: 'Jan 01, 2020',
        invoiceStatus: 'Sent',
        invoiceClient: 'Express Ink',
        invoiceAmount: '$25000',
      }
    ];
  }

  onNavigateToInvoice() {
    this.router.navigateByUrl('invoice-form');
  }


}
