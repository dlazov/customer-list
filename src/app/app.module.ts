import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressComponent } from './address.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// Not for Production! Creates a development server
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  // What stuff do I need?
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  // What's in my app module?
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers: [
    DataService,
    LoggerService
  ],
  // Where do I start?
  bootstrap: [ AppComponent ]
})
export class AppModule { }
