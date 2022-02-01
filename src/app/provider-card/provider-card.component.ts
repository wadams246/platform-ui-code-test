import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Provider } from '../types/types';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent {
  @Input() provider: Provider;
  @Input() selectable = true;

  @Output() onSelect: EventEmitter<Provider> = new EventEmitter<Provider>();
  @Output() onUnselect: EventEmitter<Provider> = new EventEmitter<Provider>();

  constructor() {}

  selectProvider(provider: Provider) {
    if (this.selectable) {
      this.onSelect.emit(provider);
    }
  }

  unselectProvider(provider: Provider) {
    this.onUnselect.emit(provider);
  }

}
