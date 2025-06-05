import { Component } from '@angular/core';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {
  departamentos = [
    { id: 1, nomeDepartamento: 'TI' },
    { id: 2, nomeDepartamento: 'RH' },
    { id: 3, nomeDepartamento: 'Financeiro' },
    { id: 4, nomeDepartamento: 'Comercial Interno' },
    { id: 5, nomeDepartamento: 'Administrativo' },
    { id: 6, nomeDepartamento: 'Comercial Externo' },
    { id: 7, nomeDepartamento: 'Atendimento ao consumidor' },
    { id: 8, nomeDepartamento: 'Assistência Técnica' },
    { id: 9, nomeDepartamento: 'Diretoria' },
    { id: 10, nomeDepartamento: 'Controladoria' },
    { id: 11, nomeDepartamento: 'Jurídico' },
  ]
}
