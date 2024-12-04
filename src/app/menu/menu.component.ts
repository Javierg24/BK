import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        { nombre: "MENÚ KING DABIZ II CARNE", imagen: '../../assets/img/productos/Burguirs.png' },
        { nombre: "GOUDA RINGS", imagen: '../../assets/img/productos/GoudaRings.png' }
      ]
    },
    {
      nombre: "Menú Parrilla",
      foto: '../../assets/img/carta/whopper2.png',
      productos: [
        { nombre: "WHOPPER", imagen: '../../assets/img/productos/whopper2.png' },
        { nombre: "DOBLE WHOPPER", imagen: '../../assets/img/productos/dobleWhopper.jpg' }
      ]
    },
    {
      nombre: "Menú de Pollo",
      foto: '../../assets/img/carta/pollo.png',
      productos: [
        { nombre: "MENÚ CRISPY CHICKEN", imagen: '../../assets/img/productos/pollo.png' },
        { nombre: "Menú LONG CHICKEN", imagen: '../../assets/img/productos/LongChicken.png' }
      ]
    },
    {
      nombre: "King Jr",
      foto: '../../assets/img/carta/KingJR2.png',
      productos: [
        { nombre: "HAMBURGEUSA KING JR", imagen: '../../assets/img/productos/BurguerKingJR.png' },
        { nombre: "NUGGETS KING JR", imagen: '../../assets/img/productos/NuggetsKingJR.png' }
      ]
    },
    {
      nombre: "100% Vegetariano",
      foto: '../../assets/img/carta/vegano.png',
      productos: [
        { nombre: "WHOPPER VEGETAL", imagen: '../../assets/img/productos/whopperVegi.png'},
        { nombre: "MENÚ LONG VEGETAL", imagen: '../../assets/img/productos/MenuLongVegetal.png' }
      ]
    },
    {
      nombre: "Sin gluten",
      foto: '../../assets/img/carta/singluten.png',
      productos: [
        { nombre: "Whopper sin gluten", imagen: '../../assets/img/productos/'},
        { nombre: "Chicken Royale sin gluten", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Hamburguesas",
      foto: '../../assets/img/carta/Burguirs.png',
      productos: [
        { nombre: "Cheeseburger", imagen: '../../assets/img/productos/' },
        { nombre: "Bacon King", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Complementos",
      foto: '../../assets/img/carta/Complementos.png',
      productos: [
        { nombre: "Patatas fritas", imagen: '../../assets/img/productos/'},
        { nombre: "Aros de cebolla", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Postres",
      foto: '../../assets/img/carta/postres.png',
      productos: [
        { nombre: "Sundae de chocolate", imagen: '../../assets/img/productos/' },
        { nombre: "Tarta de manzana", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "King Ahorro",
      foto: '../../assets/img/carta/kingahorro.png',
      productos: [
        { nombre: "Hamburguesa doble", imagen: '../../assets/img/productos/' },
        { nombre: "Nuggets", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Salsas",
      foto: '../../assets/img/carta/salsas.png',
      productos: [
        { nombre: "Salsa BBQ", imagen: '../../assets/img/productos/' },
        { nombre: "Salsa Curry", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Bebidas",
      foto: '../../assets/img/carta/bebidas.png',
      productos: [
        { nombre: "Coca-Cola", imagen: '../../assets/img/productos/'},
        { nombre: "Agua mineral", imagen: '../../assets/img/productos/' }
      ]
    },
    {
      nombre: "Ensaladas",
      foto: '../../assets/img/carta/ensaladas.png',
      productos: [
        { nombre: "Ensalada César", imagen: '../../assets/img/productos/'},
        { nombre: "Ensalada mixta", imagen: '../../assets/img/productos/'}
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categorias = this.data;

    // Captura el parámetro de la URL
    const categoria = this.route.snapshot.paramMap.get('categoria');
    if (categoria) {
      this.categoriaSeleccionada = categoria;
      this.cargarProductos(categoria);
    }
  }

  seleccionarCategoria(nombreCategoria: string): void {
    // Buscamos la categoría seleccionada
    const categoria = this.categorias.find((cat) => cat.nombre === nombreCategoria);
    if (categoria) {
      this.productos = categoria.productos;
      this.categoriaSeleccionada = nombreCategoria;
    }
  }

  cargarProductos(nombreCategoria: string): void {
    const categoria = this.categorias.find(cat => cat.nombre === nombreCategoria);
    this.productos = categoria ? categoria.productos : [];
  }

  @ViewChild('categoriasWrapper') categoriasWrapper!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  onMouseDown(event: MouseEvent | TouchEvent): void {
    this.isDragging = true;
    const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    this.startX = pageX - this.categoriasWrapper.nativeElement.offsetLeft;
    this.scrollLeft = this.categoriasWrapper.nativeElement.scrollLeft;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.categoriasWrapper.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // Reduce la velocidad ajustando el multiplicador
    this.categoriasWrapper.nativeElement.scrollLeft = this.scrollLeft - walk;
  }


  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseLeave(): void {
    this.isDragging = false;
  }

}
