import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  titulo = 'Mi primera SPA con Angular';
  descripcion = 'Listado de cursos con Bootstrap y TypeScript';

  // Las clases de Bootstrap se aplican al elemento host <app-encabezado>
  @HostBinding('class') clases = 'd-block bg-primary text-white p-4 mb-4 rounded';
}