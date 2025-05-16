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
   emplooyees: Employee[] = [];

   whenAdding (emp : Employee) {
    this.emplooyees.push(emp);

   }
}
interface Employee {
  id: number,
  name: string,
  department: string
}
