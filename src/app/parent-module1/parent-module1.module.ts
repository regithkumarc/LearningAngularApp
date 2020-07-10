import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { ParentModule2Module } from '../parent-module2/parent-module2.module';

@NgModule({
  declarations: [TestComponent, Test1Component],
  imports: [
    CommonModule,
    ParentModule2Module
  ],
  exports :[TestComponent]
})
export class ParentModule1Module { }
