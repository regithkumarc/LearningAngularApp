import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import ProductDetails from '../productDetails';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addForm : FormGroup;

  constructor(private fb : FormBuilder,private productService : ProductService) { 
    this.addForm = this.fb.group({
      productName : ['',Validators.required],
      //productDescription : ['',Validators.required],
      productPrice : ['',Validators.required]
    })
  }

  get productName(){
    return this.addForm.get('productName').value;
  }

  // get ProductDescription() {
  //   return this.addForm.get('productDescription').value;
  // }

  get ProductPrice() {
    return this.addForm.get('productPrice').value;
  }
  

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("clicked")
    // const obj = {
    //   productName(),
    //  ProductDescription(),
    //   ProductPrice()
    // }
    var productDet = new ProductDetails();
     productDet.productId = this.productService.generateId();
    productDet.productName = this.productName;
    //productDet.productDescription = this.ProductDescription;
    productDet.productPrice = this.ProductPrice;
    
    this.productService.addProduct(productDet);
  }

}
