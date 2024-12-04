import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { CartaComponent } from './carta/carta.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    EncabezadoComponent,
    DestacadosComponent,
    CartaComponent,
    LoginComponent,
    MenuComponent,
    SliderComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
