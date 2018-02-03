import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-templates',
  templateUrl: './sample-templates.component.html',
  styleUrls: ['./sample-templates.component.css']
})
export class SampleTemplatesComponent implements OnInit {
  state: string;
  displayLoadingTemplate: boolean;

  someNumber : number = 10;

  someCustomer : any = {customerName : 'Stojko', customerGender : 'male'}
  
  constructor() { }

  ngOnInit() {
    this.displayLoadingTemplate = false;
    this.state = "normal";
  }

  togleTemplate(){
    this.displayLoadingTemplate = !this.displayLoadingTemplate;
  }

  setState(uiState : string) : void {
    this.state = uiState;
  }
}