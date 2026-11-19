import { Component } from '@angular/core';
import { Encabezado } from './encabezado/encabezado';
import { ListaCursos } from './lista-cursos/lista-cursos';

@Component({
  selector: 'app-root',
  imports: [Encabezado, ListaCursos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}