import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceData: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form) {
    console.log(`form`, form.value);
    console.log(`invoiceData`, this.invoiceData);
  }

  get invoiceItems() {
    return [
      {
        itemName: 'Sample Item 1',
        cost: '10',
        quantity: '2'
      },
      {
        itemName: 'Sample Item 2',
        cost: '10',
        quantity: '2'
      }
    ];
  }

}
