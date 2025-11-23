import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from '@layout/components/navigation/navbar/navbar';
import { Footer } from '@layout/components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  templateUrl: './default.html',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Navbar,
    Footer
  ]
})
export class Default {
  // Definición estática del menú para el portafolio
  readonly menuItems = [
    { label: 'Inicio', icon: 'pi pi-home', route: '/' },
    { label: 'Servicios', icon: 'pi pi-sparkles', route: '/servicios' },
    { label: 'Portafolio', icon: 'pi pi-images', route: '/portafolio' },
    { label: 'Sobre Mí', icon: 'pi pi-user', route: '/sobre-mi' },
    { label: 'Contacto', icon: 'pi pi-envelope', route: '/contacto' }
  ];
}
