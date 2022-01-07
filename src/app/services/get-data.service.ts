import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<any>(apiUrl);
  }

  getProductNames() {
    return this.http
      .get(apiUrl)
      .pipe(map((response: []) => response.map((item) => item['productName'])));
  }
}
