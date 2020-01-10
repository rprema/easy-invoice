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
        invoiceName: 'Sample Invoice 1',
        invoiceDate: 'Sept 11, 2019',
        invoiceStatus: 'Draft',
        invoiceClient: 'Genesys',
        invoiceAmount: '$20000',
      },
      {
        invoiceName: 'Sample Invoice 2',
        invoiceDate: 'Oct 20, 2018',
        invoiceStatus: 'Overdue',
        invoiceClient: 'Sandhills',
        invoiceAmount: '$30000',
      },
      {
        invoiceName: 'Sample Invoice 3',
        invoiceDate: 'Jan 01, 2020',
        invoiceStatus: 'Paid',
        invoiceClient: 'Metric Systems',
        invoiceAmount: '$56983',
      },
      {
        invoiceName: 'Sample Invoice 4',
        invoiceDate: 'Jan 01, 2020',
        invoiceStatus: 'Sent',
        invoiceClient: 'Express Ink',
        invoiceAmount: '$25000',
      }
    ];
  }


  onAddInvoice() {
    this.router.navigateByUrl('invoice-form');
  }

  onNavigateToInvoice() {
    this.router.navigateByUrl('invoice-form');
  }


}
