import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path : "",component : LayoutComponent}
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LazylayoutModule { }
