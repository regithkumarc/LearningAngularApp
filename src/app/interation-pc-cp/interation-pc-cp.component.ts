import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interation-pc-cp',
  templateUrl: './interation-pc-cp.component.html',
  styleUrls: ['./interation-pc-cp.component.scss']
})
export class InterationPcCpComponent implements OnInit {

  name = 'Angular App';

  firstName = "regith";
  lastName = "kumar";

  childToParent : String;

  constructor() { }

  ngOnInit(): void {
  }

  receivedData(event) {
    console.log(event);
    this.childToParent = event;
    console.log("this.childToParent " + this.childToParent);
  }

}
