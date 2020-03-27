import { Component } from '@angular/core';
import { ServicoEstado } from '../servicos/servico.estado';
import { Estado } from '../entidades/estado';

@Component({
  selector: 'vetor-component',
  templateUrl: 'vetores.component.html',
  styleUrls: ['vetores.component.css']
})

export class VetoresComponent{

  servico: ServicoEstado;

  constructor(servico: ServicoEstado){
    this.servico = servico;
  }

  adicionar() : void {
    this.servico.adicionar();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void {
    this.servico.alterar(i);
  }
}
