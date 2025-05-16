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
  department = "";
  added = false;
  emplooyees: any  = [];
  id=0;
  lastId = 1;
  

  addEmployee() {
    //console.log(`Adding new employee ${name}`);        
    this.added = true;
    this.emplooyees.push({
      name: this.name,
      department: this.department,
      id: ++this.lastId
  });    
   
  }

  removeEmployee() {
    //console.log(`Removind Employee ${this.name}`);
    this.name = ''
  }   

}
