import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  constructor(private formGroupDirective: FormGroupDirective) {}
  basicInfoForm: FormGroup;
  ngOnInit(): void {
    this.basicInfoForm = this.formGroupDirective.control;
  }
}
