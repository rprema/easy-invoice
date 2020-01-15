import {Injectable} from '@angular/core';
import invoices from '../../invoices';
import clients from '../../clients';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }


  getAllInvoices() {
    return invoices;
  }

  getAllClients() {
    return clients;
  }


  getInvoice(invoiceId) {
    let invoice = invoices.find((item) => item.id == invoiceId) || {};
    console.log(`getInvoice invoice`, invoice);
    return invoice;
  }

  getClient(clientId) {
    let client = clients.find((item) => item.id == clientId) || {};
    console.log(`getClient client`, client);
    return client;


  }

}
