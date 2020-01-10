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

  onSubmit(settingsData) {
    console.log(`settingsData: `, settingsData);

  }
  constructor() { }

  ngOnInit() {
  }

}
