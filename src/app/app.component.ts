import { Component } from '@angular/core';
import { HelloComponent } from "./hello/hello.component";
import { HeaderComponent } from "./header/header.component";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  title = 'frontend-funcionarios-departamentos';
  name = '';  
  year = 2025;
  nameInsert = 'Rafael de Luca';

  getYear() {
    return this.year;
  }
  addEmployee(name : string) {
    console.log(`Adding new employee ${name}`);
    this.nameInsert = name;
    this.name = "";

  }
  removeEmployee () {
    console.log(`Removind Employee ${this.name}`);
    this.name=''
    this.nameInsert = ""
  }
  updateEmployee (event : any) {
    this.name = event.target.value;
  }


}
