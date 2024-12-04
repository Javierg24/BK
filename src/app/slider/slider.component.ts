import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  // Lista de imágenes para el slider
  fotos: string[] = [
    '../../assets/img/parrilla.jpg',
    '../../assets/img/lechuga.png',
    '../../assets/img/BurguerSlider.png',
    '../../assets/img/panBurguir.png'
  ];

  textos: string[] = [
    'Texto para la imagen 1',
    'Texto para la imagen 2',
    'Texto para la imagen 3',
    'Texto para la imagen 4',
  ];

  fotoActual: number = 0;

  irAFoto(index: number): void {
    this.fotoActual = index;
  }
}
