import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private formDirective: FormGroupDirective,
    private getNames: GetDataService
  ) {}

  productFormGroup: FormGroup;
  productNames: [];
  filteredArray: string[];

  productForm: FormArray;
  units = ['db', 'L', 'kg'];
  options = [];

  ngOnInit(): void {
    this.handleFormGroup();
    this.getProductName();
    this.productForm = this.formDirective.control.get('products') as FormArray;
  }

  addProduct(productList) {
    this.productForm.value.push(productList);
  }

  getProductName() {
    this.getNames.getProductNames().subscribe((data) => (this.options = data));
  }

  handleFormGroup() {
    this.productFormGroup = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(null, Validators.pattern('^[0-9]*$')),
      amountUnit: new FormControl(''),
    });
    this.productFormGroup
      .get('name')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((response) => {
        if (response && response.length) {
          this.filterData(response);
        } else {
          this.filteredArray = [];
        }
      });
  }

  filterData(enteredData) {
    this.filteredArray = this.options.filter((item) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  test() {
    this.productFormGroup.reset();
  }
}
