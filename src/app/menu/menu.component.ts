import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import menu from '../../../src/assets/json/menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';
  productoSeleccionado: any | null = null;

  @ViewChild('categoriasWrapper') categoriasWrapper!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categorias = menu.categorias;
    const categoria = this.route.snapshot.paramMap.get('categoria');
    if (categoria) {
      this.categoriaSeleccionada = categoria;
      this.cargarProductos(categoria);
    }
  }

  seleccionarCategoria(nombreCategoria: string): void {
    const categoria = this.categorias.find(cat => cat.nombre === nombreCategoria);
    if (categoria) {
      this.productos = categoria.productos;
      this.categoriaSeleccionada = nombreCategoria;
    }
  }

  cargarProductos(nombreCategoria: string): void {
    const categoria = this.categorias.find(cat => cat.nombre === nombreCategoria);
    this.productos = categoria ? categoria.productos : [];
  }

  seleccionarProducto(producto: any): void {
    this.productoSeleccionado = producto;
  }

  regresarAProductos(): void {
    this.productoSeleccionado = null;
  }

  onMouseDown(event: MouseEvent | TouchEvent): void {
    this.isDragging = true;
    const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
    this.startX = pageX - this.categoriasWrapper.nativeElement.offsetLeft;
    this.scrollLeft = this.categoriasWrapper.nativeElement.scrollLeft;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.categoriasWrapper.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; 
    this.categoriasWrapper.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseLeave(): void {
    this.isDragging = false;
  }
}
