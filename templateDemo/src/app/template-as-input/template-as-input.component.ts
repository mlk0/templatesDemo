import { Component, OnInit, TemplateRef, Input } from '@angular/core';
 

@Component({
  selector: 'app-template-as-input',
  templateUrl: './template-as-input.component.html',
  styleUrls: ['./template-as-input.component.css']
})
export class TemplateAsInputComponent implements OnInit {

  @Input() alternativeTemplate : TemplateRef<any>

  constructor() { }

  ngOnInit() {
  }

}
