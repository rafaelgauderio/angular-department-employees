import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-funcionarios-departamentos';

  arrayFuncionarios = [
    { id: 1, nome: 'Rafael de Luca', departamento: 'TI' },
    { id: 2, nome: 'Claudia Luca', departamento: 'RH' },
    { id: 3, nome: 'Larissa da Silva', departamento: 'Financeiro' },
    { id: 4, nome: 'Luiza Colorada', departamento: 'Comercial' },
    { id: 5, nome: 'Zara Nova', departamento: 'TI' },
    { id: 6, nome: 'Júlio Castro', departamento: 'Logística'},
    { id: 7, nome: 'Marisa de Luca', departamento: 'TI' },
    { id: 8, nome: 'Sara Luca', departamento: 'RH' },
    { id: 9, nome: 'Jonas da Silva', departamento: 'TI' },
    { id: 10, nome: 'Paula Colorada', departamento: 'Comercial' }
  ];
}
