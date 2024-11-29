import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../assets/json/menu.json', { responseType: 'text' }).subscribe(
      (response: string) => {
        const data = JSON.parse(response); // Decodifica el JSON
        this.categorias = data.categorias;
        this.productos = []; // Inicialmente sin productos seleccionados
      },
      (error) => {
        console.error('Error al cargar el JSON:', error);
      }
    );
  }

  // Método para filtrar productos según la categoría seleccionada
  seleccionarCategoria(nombreCategoria: string): void {
    const categoria = this.categorias.find((cat) => cat.nombre === nombreCategoria);
    if (categoria) {
      this.productos = categoria.productos;
      this.categoriaSeleccionada = nombreCategoria;
    }
  }
}
