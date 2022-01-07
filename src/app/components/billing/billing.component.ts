import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  constructor(private formDirective: FormGroupDirective) {}

  billingForm: FormGroup;
  ngOnInit(): void {
    this.billingForm = this.formDirective.control.get(
      'billingInformation'
    ) as FormGroup;
  }
}
