import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'LearningAngularApp <script></script>';
  // updateTitle = "empty";
  name = "AngularApp";

 // users = "null";
  // users = "value";
  //userDetails = null;
  // userDetails = [
  //   {name : "Regith",age:27,gender:"m"},
  //   {name:"Vijith",age:32,gender:"m"},
  //   {name:'Bharath',age:29,gender:'m'},
  //   {name: "Rukmani",age:60,gender:"f"},
  //   {name: "Sindhu",age:36,gender:"f"},
  //   {name:'Vaishnavi',age:6,gender:'f'},
  //   {name:'Empty',age:6}
  // ]

  // userDetails1 = [
  //   {name : "Regith",age:27,gender:"m"},
  //   {name:"Vijith",age:32,gender:"m"},
  //   {name:'Bharath',age:29,gender:'m'},
  //   {name: "Rukmani",age:60,gender:"f"},
  //   {name: "Sindhu",age:36,gender:"f"},
  //   {name:'Vaishnavi',age:6,gender:'f'},
  //   {name:'Empty',age:6}
  // ]

  // userDetails2 = [
  //   {name:"Vijith",age:32,gender:"m"},
  //   {name : "Regith",age:27,gender:"m"},
  //   {name:'Bharath',age:29,gender:'m'},
  //   {name: "Rukmani",age:60,gender:"f"},
  //   {name: "Sindhu",age:36,gender:"f"},
  //   {name:'Vaishnavi',age:6,gender:'f'},
  //   {name:'Empty',age:6}
  // ]

  // constructor(public dataServices : DataService){
  //   this.userDetails = this.userDetails1;
  // }

  // buttonClick() {
  //   //this.updateTitle = "updated";
  //   console.log("count : ",this.dataServices.count);
  //   this.dataServices.count++;
  // }

  // printMsg(event) {
  //   console.log(event,"Message Printed Successful");

  //   this.title = event.target.value;
  // }

  // orderChange() {
  //   console.log("order changed")
  //   this.userDetails = this.userDetails[0].name == this.userDetails1[0].name ? this.userDetails2 : this.userDetails1; 
  // }

  // getName(index,user){
  //   return user.name;
  // }

  // onSubmit(data){

  // }
}
