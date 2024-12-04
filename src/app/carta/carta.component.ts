import { Component } from '@angular/core';
import { Router } from '@angular/router';
import menu from '../../../src/assets/json/menu.json';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {

  title = "json-angular";
  MenuBK: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Asignar el contenido del JSON a la propiedad MenuBK
    this.MenuBK = menu.categorias;
  }

  seleccionarCategoria(categoria: string): void {
    // Redirige al componente MenuComponent pasando la categoría como parámetro
    this.router.navigate(['../menu', categoria]);
  }
}
