import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DataService } from './data.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductGetComponent } from './crud/product-get/product-get.component';
import { ProductEditComponent } from './crud/product-edit/product-edit.component';
import { ProductService } from './crud/product.service';
import { HttpClientModule } from '@angular/common/http';

// const routes : Routes = [
//   {path : "home",component : HomeComponent},
//   {path : "login",component : LoginComponent},
//   {path : "lazylayout",loadChildren : './lazylayout/lazylayout.module#LazylayoutModule'}
// ];

const routes : Routes = [
  {path : "product-add",component : ProductAddComponent},
  {path : "product-get",component : ProductGetComponent},
  {path : "product-edit",component : ProductEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
