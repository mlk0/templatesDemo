import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleTemplatesComponent } from './sample-templates/sample-templates.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleTemplatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
