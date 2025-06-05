import { Component } from '@angular/core';

@Component({
  selector: 'app-departamento-cadastro',
  templateUrl: './departamento-cadastro.component.html',
  styleUrls: ['./departamento-cadastro.component.css']
})
export class DepartamentoCadastroComponent {

  name = "Comercial Interno";
  registrationDate = new Date(2024, 1, 15);
  updateDate = new Date(2024, 4, 29);
  exclusionDate = new Date(2025, 1, 20);
  value = 122034.5030
  value02 = 81712.8025

  toCamelCase(str: string) {
    return str.replace(/(\s|-|_|\.)(\w)/g, function (match, sep, letter) {
      return letter.toUpperCase();
    }).replace(/(^\w)/, function (letter) {
      return letter.toLowerCase();
    });
  }

}

