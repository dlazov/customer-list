import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent  {
  @Input() address: Address;

  regions   = ['East', 'Midwest', 'North', 'South', 'West', 'Northwest'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec', 'Ohio', 'Alaska'];
}
