import { Component } from '@angular/core';
import { HelloComponent } from "./hello/hello.component";
import { HeaderComponent } from "./header/header.component";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HelloComponent, HeaderComponent]
})
export class AppComponent {
  title = 'frontend-funcionarios-departamentos';
  name = 'Rafael de Luca';  
  year = 2025;

  getYear() {
    return this.year;
  }
}
