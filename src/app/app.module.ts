import { NgModule } from '@angular/core';
import {
  FormBuilder,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatDateFnsDateModule } from 'ngx-mat-datefns-date-adapter';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { BillingComponent } from './components/billing/billing.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DATE_FNS_DATE_FORMATS } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    ShippingComponent,
    BasicInfoComponent,
    ProductsComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMatDateFnsDateModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatAutocompleteModule,
  ],

  providers: [
    FormGroupDirective,
    FormBuilder,

    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
