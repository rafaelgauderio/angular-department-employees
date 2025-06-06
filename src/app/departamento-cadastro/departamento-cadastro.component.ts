import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Departamento {
  nome?: string = '';
  empresa?: string = '';
}

@Component({
  selector: 'app-departamento-cadastro',
  templateUrl: './departamento-cadastro.component.html',
  styleUrls: ['./departamento-cadastro.component.css'],
})
export class DepartamentoCadastroComponent {
  name = 'Comercial Interno';
  registrationDate = new Date(2024, 1, 15);
  updateDate = new Date(2024, 4, 29);
  exclusionDate = new Date(2025, 1, 20);
  value = 122034.503;
  value02 = 81712.8025;

  empresas = [
    'Matriz Porto Alegre',
    'Filial Canoas',
    'Filial Cornélio Procópio',
    'Filial Curitiba',
    'Filial Cascavel',
    'Filial Esteio',
  ];
  defaultCompany = 'Matriz Porto Alegre';

  departamento = new Departamento();

  salvar(departmentForm: NgForm) {
    this.departamento.nome = departmentForm.value.nomeDep;
    this.departamento.empresa = departmentForm.value.empresaDep;
    //console.log('Nome do departamento: ' + departmentForm.value.nome);
    //console.log('Empresa do departamento: ' + departmentForm.value.empresa);
    console.log(departmentForm.value);
    console.log(this.departamento);
  }

  toCamelCase(str: string) {
    return str
      .replace(/(\s|-|_|\.)(\w)/g, function (match, sep, letter) {
        return letter.toUpperCase();
      })
      .replace(/(^\w)/, function (letter) {
        return letter.toLowerCase();
      });
  }
}
