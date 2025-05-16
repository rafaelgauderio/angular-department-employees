import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {  
  name = '';
  department = '';
  added = false;    
  lastId = 1;
  @Output() employeeAdded = new EventEmitter ();

  addEmployee() {
    //console.log(`Adding new employee ${name}`);        
    this.added = true;

    const employee = {
      name: this.name,
      department: this.department,
      id: ++this.lastId
    };

    this.employeeAdded.emit(employee);

  }

  removeEmployee() {
    //console.log(`Removind Employee ${this.name}`);
    this.name = '';
    this.department = '';
  }  
}