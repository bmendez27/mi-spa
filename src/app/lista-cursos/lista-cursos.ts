import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Curso {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista-cursos',
  imports: [NgFor],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css',
})
export class ListaCursos {
  cursos: Curso[] = [
    { nombre: 'Angular', descripcion: 'Framework para construir SPAs' },
    { nombre: 'TypeScript', descripcion: 'JavaScript con tipos' },
    { nombre: 'Bootstrap', descripcion: 'Estilos y componentes responsivos' },
  ];

  agregarCurso(
    evento: Event,
    nombre: HTMLInputElement,
    descripcion: HTMLInputElement
  ): void {
    evento.preventDefault(); // evita que el formulario recargue la página

    if (!nombre.value.trim()) {
      return;
    }

    this.cursos.push({
      nombre: nombre.value.trim(),
      descripcion: descripcion.value.trim(),
    });

    nombre.value = '';
    descripcion.value = '';
    nombre.focus();
  }
}