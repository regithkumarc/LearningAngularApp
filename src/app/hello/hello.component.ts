import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hello',
  template:`<h1>Hello {{firstName}} : {{lastName}}</h1>
            <button (click) = "sendDataToParent()">ChildToParent</button>`,
  styleUrls: ['./hello.component.scss'],
  providers : [DataService]
})
export class HelloComponent implements OnInit {

  @Input('firstName') firstName : String;
  @Input('lastName') lastName : String;

  @Output() sendData : EventEmitter<any> = new EventEmitter<any>();
  @Input() testMethod : any;

  constructor(public dataServ : DataService) { }

  ngOnInit(): void {
  }


  sendDataToParent() {
    this.testMethod('Diff way to pass input parent to child');
    //console.log("sendDataToParent");
    //this.sendData.emit("transfer data from child to parent");
  }

}
