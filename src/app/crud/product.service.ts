import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:9000/api/products"
  constructor(private http : HttpClient) { }

  generateId(){
    let d = new Date();
let formatted = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}`;
    return formatted;
  }

  addProduct(productDetails){
    console.log(productDetails)

    this.http.post(`${this.url}/addProduct`,productDetails)
    .subscribe(res => {console.log("added successfully")})
  }

  getAllProduct(){
    return this.http.get(`${this.url}/getAllProducts`);
  }
}
