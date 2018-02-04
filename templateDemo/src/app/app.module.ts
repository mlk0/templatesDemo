import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleTemplatesComponent } from './sample-templates/sample-templates.component';
import { TemplateAsInputComponent } from './template-as-input/template-as-input.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleTemplatesComponent,
    TemplateAsInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
