import { Component, OnInit } from '@angular/core';

import { Provider } from '../types/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.checkSession();
  }

  selectProvider(provider: Provider) {
    const index = this.unselectedProviders.indexOf(provider);

    this.unselectedProviders.splice(index, 1);
    this.selectedProviders.push(provider);
    this.updateSession();
  }

  unselectProvider(provider: Provider) {
    const index = this.selectedProviders.indexOf(provider);

    this.selectedProviders.splice(index, 1);
    this.unselectedProviders.push(provider);
    this.updateSession();
  }

  private checkSession() {
    const sessionSelected = JSON.parse(sessionStorage.getItem('selectedProviders'));
    const sessionUnselected = JSON.parse(sessionStorage.getItem('unselectedProviders'));
    
    this.selectedProviders = sessionSelected || this.selectedProviders;
    this.unselectedProviders = sessionUnselected || this.unselectedProviders;
  }

  private updateSession() {
    sessionStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
    sessionStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
  }
}
