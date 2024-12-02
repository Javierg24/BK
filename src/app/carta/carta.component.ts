import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  menuItems = [
    { nombre: 'Novedades', foto: '../../assets/img/carta/novedades.png' },
    { nombre: 'Menú Parrilla', foto: '../../assets/img/carta/whopper2.png' },
    { nombre: 'Menú de Pollo', foto: '../../assets/img/carta/pollo.png' },
    { nombre: 'King Jr', foto: '../../assets/img/carta/KingJR2.png' },
    { nombre: '100% Vegetariano', foto: '../../assets/img/carta/vegano.png' },
    { nombre: 'Sin gluten', foto: '../../assets/img/carta/singluten.png' },
    { nombre: 'Hamburguesas', foto: '../../assets/img/carta/Burguirs.png' },
    { nombre: 'Complementos', foto: '../../assets/img/carta/Complementos.png' },
    { nombre: 'Postres', foto: '../../assets/img/carta/postres.png' },
    { nombre: 'King Ahorro', foto: '../../assets/img/carta/kingahorro.png' },
    { nombre: 'Salsas', foto: '../../assets/img/carta/salsas.png' },
    { nombre: 'Bebidas', foto: '../../assets/img/carta/bebidas.png' },
    { nombre: 'Ensaladas', foto: '../../assets/img/carta/ensaladas.png' }
  ];

  constructor(private router: Router) {}

  seleccionarCategoria(categoria: string): void {
    // Redirige al componente MenuComponent pasando la categoría como parámetro
    this.router.navigate(['../menu', categoria]);
  }
}
