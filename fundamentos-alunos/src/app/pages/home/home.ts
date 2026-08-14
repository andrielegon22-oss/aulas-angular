import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = 'Seja bem vindo!'
  subtitulo: string = 'Este é um sistema para gerenciamento escolar'

}
