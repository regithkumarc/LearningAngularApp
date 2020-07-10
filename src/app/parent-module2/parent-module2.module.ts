import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test11Component } from './test11/test11.component';

@NgModule({
  declarations: [Test11Component],
  imports: [
    CommonModule
  ],
  exports :[Test11Component]
})
export class ParentModule2Module { }
