import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aluno-card',
  imports: [NgClass],
  templateUrl: './aluno-card.html',
  styleUrl: './aluno-card.css',
})
export class AlunoCard {

  @Input({required: true}) aluno!: Aluno

}
