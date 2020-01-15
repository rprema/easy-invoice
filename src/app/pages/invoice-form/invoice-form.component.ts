import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../services/app/app.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  itemId: any;
  invoiceData: any = {};
  isNew = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService) {
    this.itemId = route.snapshot.paramMap.get('itemId');
  }

  ngOnInit() {
    this.getInvoiceData();
  }

  getInvoiceData() {
    if (this.itemId && this.itemId !== 'new') {
      this.isNew = false;
      this.invoiceData = this.appService.getInvoice(this.itemId);
    } else {
      this.invoiceData = this.defaultInvoiceData();
    }
  }

  onNavigateInvoices() {
    this.router.navigateByUrl('invoices');
  }

  defaultInvoiceData() {
    return {
      invoiceItems: [
        {
          itemName: '',
          cost: '',
          quantity: ''
        },
      ]
    };
  }

  onAddInvoiceItem() {
    console.log(`clicked on addInvoiceItem`);
    console.log(`invoiceData`, this.invoiceData.invoiceItems.length);
    this.invoiceData.invoiceItems.push({
      itemName: '',
      cost: '',
      quantity: ''
    });
  }

  onDeleteInvoiceItem(index) {
    this.invoiceData.invoiceItems = this.invoiceData.invoiceItems.filter((item, itemIdx) => {
      return (index !== itemIdx);
    });
  }

  onClickSave() {
    console.log('Clicked on Save Button');
    console.log(`invoiceData`, this.invoiceData);
  }

  onClickDelete() {
    console.log('Clicked on Send Invoice Button');
  }


}
