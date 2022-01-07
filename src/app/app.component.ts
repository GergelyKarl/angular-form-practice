import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
      Date: [''],
      billingInformation: this.formBuilder.group({
        name: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
        zip: [null, [Validators.pattern('^[0-9]*$')]],
        city: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
        street: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
        comment: ['', Validators.pattern('[-_a-zA-Z0-9\\s]*')],
      }),
      hasShippingInformation: [true, Validators.required],
      shippingInformation: this.formBuilder.group({
        name: '',
        zip: [null, [Validators.pattern('^[0-9]*$')]],
        city: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
        street: ['', Validators.pattern('[-_a-zA-Z\\s]*')],
        comment: ['', Validators.pattern('[-_a-zA-Z0-9]*')],
      }),
      products: this.formBuilder.array([]),
    });
  }

  resetForm() {
    this.form.reset();
  }

  fillWithDummyData() {
    this.form.patchValue({
      name: 'Gipsz Jakab',
      Date: new Date(),
      billingInformation: {
        name: 'John Doe',
        zip: 8700,
        city: 'NYC',
        street: 'Backstreet',
        comment: '#',
      },
      hasShippingInformation: false,
      shippingInformation: {
        name: 'John Doe',
        zip: 8700,
        city: 'NYC',
        street: 'Backstreet',
        comment: '#',
      },
    });
  }
  printResult() {
    console.log(this.form.value);
  }
}
