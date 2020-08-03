import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss']
})
export class ProductGetComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    console.log("Products : " + this.productService.getAllProduct());
  }

}
