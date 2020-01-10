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


  onClickSave() {
    console.log('Clicked on Save Button');
  }

  onClickPreview() {
    console.log('Clicked on Preview Button');
  }
  onClickSend() {
    console.log('Clicked on Send Invoice Button');
  }

}
