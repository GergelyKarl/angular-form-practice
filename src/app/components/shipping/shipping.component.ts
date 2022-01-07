import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  constructor(private formDirective: FormGroupDirective) {}
  shippingComponent: FormGroup;
  ngOnInit(): void {
    this.shippingComponent = this.formDirective.control.get(
      'shippingInformation'
    ) as FormGroup;
  }
}
