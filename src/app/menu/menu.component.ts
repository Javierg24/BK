import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';

  // Definimos las categorías directamente en un array
  data = [
    {
      nombre: "Novedades",
      foto: '../../assets/img/carta/novedades.png',
      productos: [
        { nombre: "Big King", descripcion: "Hamburguesa doble con salsa especial y queso.", precio: 5.99 },
        { nombre: "BK Melt", descripcion: "Hamburguesa con queso y cebolla caramelizada.", precio: 6.49 }
      ]
    },
    {
      nombre: "Menú Parrilla",
      foto: '../../assets/img/carta/whopper2.png',
      productos: [
        { nombre: "Whopper", descripcion: "Hamburguesa a la parrilla con vegetales frescos.", precio: 6.99 },
        { nombre: "Double Whopper", descripcion: "Versión doble del clásico Whopper.", precio: 7.99 }
      ]
    },
    {
      nombre: "Menú de Pollo",
      foto: '../../assets/img/carta/pollo.png',
      productos: [
        { nombre: "Crispy Chicken", descripcion: "Hamburguesa de pollo crujiente con lechuga y mayonesa.", precio: 5.49 },
        { nombre: "Chicken Royale", descripcion: "Pollo empanado con lechuga y salsa especial.", precio: 5.99 }
      ]
    },
    {
      nombre: "King Jr",
      foto: '../../assets/img/carta/KingJR2.png',
      productos: [
        { nombre: "Hamburguesa King Jr", descripcion: "Hamburguesa pequeña para niños con queso y ketchup.", precio: 3.99 },
        { nombre: "Nuggets King Jr", descripcion: "6 nuggets de pollo con patatas y bebida.", precio: 4.49 }
      ]
    },
    {
      nombre: "100% Vegetariano",
      foto: '../../assets/img/carta/vegano.png',
      productos: [
        { nombre: "Plant-Based Whopper", descripcion: "Whopper elaborado con carne vegetal.", precio: 6.99 },
        { nombre: "Vegan Royale", descripcion: "Versión vegana del clásico Chicken Royale.", precio: 5.99 }
      ]
    },
    {
      nombre: "Sin gluten",
      foto: '../../assets/img/carta/singluten.png',
      productos: [
        { nombre: "Whopper sin gluten", descripcion: "Versión sin gluten del clásico Whopper.", precio: 7.49 },
        { nombre: "Chicken Royale sin gluten", descripcion: "Hamburguesa de pollo apta para celíacos.", precio: 6.49 }
      ]
    },
    {
      nombre: "Hamburguesas",
      foto: '../../assets/img/carta/Burguirs.png',
      productos: [
        { nombre: "Cheeseburger", descripcion: "Hamburguesa con queso y ketchup.", precio: 2.99 },
        { nombre: "Bacon King", descripcion: "Hamburguesa con bacon crujiente y queso.", precio: 6.99 }
      ]
    },
    {
      nombre: "Complementos",
      foto: '../../assets/img/carta/Complementos.png',
      productos: [
        { nombre: "Patatas fritas", descripcion: "Crujientes y doradas patatas fritas.", precio: 2.49 },
        { nombre: "Aros de cebolla", descripcion: "Aros de cebolla rebozados y crujientes.", precio: 2.99 }
      ]
    },
    {
      nombre: "Postres",
      foto: '../../assets/img/carta/postres.png',
      productos: [
        { nombre: "Sundae de chocolate", descripcion: "Helado con salsa de chocolate.", precio: 2.99 },
        { nombre: "Tarta de manzana", descripcion: "Deliciosa tarta caliente de manzana.", precio: 1.99 }
      ]
    },
    {
      nombre: "King Ahorro",
      foto: '../../assets/img/carta/kingahorro.png',
      productos: [
        { nombre: "Hamburguesa doble", descripcion: "Pequeña hamburguesa con doble carne y queso.", precio: 1.99 },
        { nombre: "Nuggets", descripcion: "6 nuggets con salsa.", precio: 2.49 }
      ]
    },
    {
      nombre: "Salsas",
      foto: '../../assets/img/carta/salsas.png',
      productos: [
        { nombre: "Salsa BBQ", descripcion: "Clásica salsa barbacoa.", precio: 0.49 },
        { nombre: "Salsa Curry", descripcion: "Salsa con un toque exótico de curry.", precio: 0.49 }
      ]
    },
    {
      nombre: "Bebidas",
      foto: '../../assets/img/carta/bebidas.png',
      productos: [
        { nombre: "Coca-Cola", descripcion: "Refresco de cola clásico.", precio: 2.49 },
        { nombre: "Agua mineral", descripcion: "Botella de agua fresca.", precio: 1.99 }
      ]
    },
    {
      nombre: "Ensaladas",
      foto: '../../assets/img/carta/ensaladas.png',
      productos: [
        { nombre: "Ensalada César", descripcion: "Ensalada con lechuga, croutons y salsa César.", precio: 4.99 },
        { nombre: "Ensalada mixta", descripcion: "Lechuga, tomate, zanahoria y maíz.", precio: 3.99 }
      ]
    }
  ];

  ngOnInit(): void {
    // Inicializamos las categorías desde el array
    this.categorias = this.data;
    this.productos = []; // Inicialmente sin productos seleccionados
  }

  seleccionarCategoria(nombreCategoria: string): void {
    // Buscamos la categoría seleccionada
    const categoria = this.categorias.find((cat) => cat.nombre === nombreCategoria);
    if (categoria) {
      this.productos = categoria.productos;
      this.categoriaSeleccionada = nombreCategoria;
    }
  }
}
