import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-employee-card',
  standalone: false,
  templateUrl: './employee-card.component.html',
  //styleUrl: './employee-card.component.css'
  styles: [`
    .card-block {
      text-transform: capitalize;
      color: green;
    }`]
})

export class EmployeeCardComponent {
  @Input() employee: any = {
    id: 0,
    name: '',
    department: ''
  };

  getCardStyle() {
    return {
      backgroundColor: this.employee.id % 2 === 0 ? 'lightyellow' : 'lightgreen',
      borderColor: this.employee.id % 2 === 0 ? 'yellow' : 'green',
      borderWidth: this.employee.id % 2 == 0 ? '2px' : '1px'
    };
  }

  getClassList() {
    return ['badge', 'badge-primary'];
  }
}