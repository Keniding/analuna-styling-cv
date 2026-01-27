import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
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
      items: [
        {
          label: 'Tratamientos Faciales',
          icon: 'pi pi-star',
          items: [
            { label: 'Limpieza Profunda', icon: 'pi pi-eraser' },
            { label: 'Hidratación', icon: 'pi pi-tint' },
            { label: 'Anti-edad', icon: 'pi pi-shield' },
          ],
        },
        {
          label: 'Tratamientos Corporales',
          icon: 'pi pi-heart',
          items: [
            { label: 'Masajes', icon: 'pi pi-wave-pulse' },
            { label: 'Exfoliación', icon: 'pi pi-sparkles' },
            { label: 'Reafirmante', icon: 'pi pi-arrow-up' },
          ],
        },
        {
          label: 'Maquillaje',
          icon: 'pi pi-palette',
          items: [
            { label: 'Social', icon: 'pi pi-instagram' },
            { label: 'Novias', icon: 'pi pi-heart-fill' },
            { label: 'Profesional', icon: 'pi pi-briefcase' },
          ],
        },
      ],
    },
    {
      label: 'Portafolio',
      icon: 'pi pi-images',
      routerLink: '/portafolio',
    },
    {
      label: 'Sobre Mí',
      icon: 'pi pi-user',
      routerLink: '/sobre-mi',
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      routerLink: '/contacto',
    },
  ];

  onReservarClick() {
    globalThis.dispatchEvent(new CustomEvent('open-booking-dialog'));
  }
}
