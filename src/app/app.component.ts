import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  title = 'angular-form-practice';
  isChecked = true;
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      Date: [''],
      billingInformation: this.formBuilder.group({
        name: '',
        zip: null,
        city: '',
        street: '',
        comment: '',
      }),
      hasShippingInformation: [true, Validators.required],
      shippingInformation: this.formBuilder.group({
        name: '',
        zip: null,
        city: '',
        street: '',
        comment: '',
      }),
    });
    console.log(this.form);
  }

  qwe() {
    console.log(this.form.value);
    

  }
}
