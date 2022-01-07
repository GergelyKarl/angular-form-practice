import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  dataSource = [];
  constructor(private callApi: GetDataService) {
    callApi.getAllData().subscribe((data) => (this.dataSource = data));
  }

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'id',
    'name',
    'quantity',
    'amountUnit',
    'button',
  ];

  handleDelete(id) {
    this.dataSource = this.dataSource.filter((item) => item.id !== id);
    console.log(this.dataSource);
  }
}
