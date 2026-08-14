import { Component } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCard } from "../../components/aluno-card/aluno-card";

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCard],
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css',
})
export class AlunoLista {

  modoExibicao: string = 'cards'


  // Lista de objetos do tipo 'Aluno'
  listaAlunos: Aluno[] = [
    {
      nome: 'Mike Wazowski ',
      idade: 25,
      imagem: 'https://i.pinimg.com/736x/7d/18/a0/7d18a02f3b18f285ef91f7b3db5cc57a.jpg',
      email: 'wazowskir@proway.com',
      turma: 'Superdev',
      notaFinal: 5,
    },
    {
      nome: 'Mary Jane',
      idade: 20,
      imagem: 'https://protocolosmarvel.wordpress.com/wp-content/uploads/2014/09/image29.jpg?w=507&h=388',
      email: 'mj@proway.com',
      turma: 'Adas Dev',
      notaFinal: 9,
    },
    {
      nome: 'Venon',
      idade: 105,
      imagem: 'https://nerdizmo.ig.com.br/wp-content/uploads/2024/03/seth-rogen-filme-animado-de-venom.jpg',
      email: 'venon@proway.com',
      turma: 'Adas Dev',
      notaFinal: 3,
    }
  ]

verCards(): void {
  this.modoExibicao = 'cards'
}

verTabela(): void {
  this.modoExibicao = 'tabela'
}
}