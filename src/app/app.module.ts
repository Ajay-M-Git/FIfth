import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FirstCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,FirstCompComponent]
})
export class AppModule { }
