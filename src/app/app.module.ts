import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HelloComponent, EmployeeCardComponent, EmployeeFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
