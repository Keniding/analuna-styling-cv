import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
  ],
  templateUrl: './navbar.html',
})
export class Navbar {
  items: MenuItem[] = [
    {
      label: 'Servicios',
      icon: 'pi pi-sparkles',
      url: '#servicios',
      command: (e) => this.navigateTo(e, 'servicios'),
    },
    {
      label: 'Portafolio',
      icon: 'pi pi-images',
      url: '#portafolio',
      command: (e) => this.navigateTo(e, 'portafolio'),
    },
    {
      label: 'Sobre Mí',
      icon: 'pi pi-user',
      url: '#sobre-mi',
      command: (e) => this.navigateTo(e, 'sobre-mi'),
    },
    {
      label: 'Trayectoria',
      icon: 'pi pi-briefcase',
      url: '#trayectoria',
      command: (e) => this.navigateTo(e, 'trayectoria'),
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      url: '#contacto',
      command: (e) => this.navigateTo(e, 'contacto'),
    },
  ];

  onReservarClick() {
    globalThis.dispatchEvent(new CustomEvent('open-booking-dialog'));
  }

  // Navegación vía JS en vez del href nativo: el Router está configurado con
  // onSameUrlNavigation: 'reload', y un <a href="#..."> nativo dispara ese
  // reload, remontando los componentes de la página (ej. reinicia el carrusel).
  private navigateTo(e: MenuItemCommandEvent, fragment: string): void {
    e.originalEvent?.preventDefault();
    if (fragment === 'sobre-mi') {
      globalThis.dispatchEvent(new CustomEvent('show-about-slide'));
    }
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
