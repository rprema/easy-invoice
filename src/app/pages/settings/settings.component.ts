import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  companyName: any;
  companyEmail: any;
  companyPhone: any;
  companyAddress: any;
  companyCity: any;
  companyState: any;
  companyPostal: any;
  currencySymbol: any;
  taxPercentage: any;
  discountAmount: any;

  onSubmit(settingsData) {
    console.log(`settingsData: `, settingsData);

  }
  constructor() { }

  ngOnInit() {
  }
  onSaveSettings(){
    console.log('clicked on save settings');

  }

}
