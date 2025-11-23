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
    RippleModule
  ],
  templateUrl: './navbar.html'
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
            { label: 'Limpieza Profunda', icon: 'pi pi-circle' },
            { label: 'Hidratación', icon: 'pi pi-circle' },
            { label: 'Anti-edad', icon: 'pi pi-circle' }
          ]
        },
        {
          label: 'Tratamientos Corporales',
          icon: 'pi pi-heart',
          items: [
            { label: 'Masajes', icon: 'pi pi-circle' },
            { label: 'Exfoliación', icon: 'pi pi-circle' },
            { label: 'Reafirmante', icon: 'pi pi-circle' }
          ]
        },
        {
          label: 'Maquillaje',
          icon: 'pi pi-palette',
          items: [
            { label: 'Social', icon: 'pi pi-circle' },
            { label: 'Novias', icon: 'pi pi-circle' },
            { label: 'Profesional', icon: 'pi pi-circle' }
          ]
        }
      ]
    },
    {
      label: 'Portafolio',
      icon: 'pi pi-images',
      routerLink: '/portafolio'
    },
    {
      label: 'Sobre Mí',
      icon: 'pi pi-user',
      routerLink: '/sobre-mi'
    },
    {
      label: 'Contacto',
      icon: 'pi pi-envelope',
      routerLink: '/contacto'
    }
  ];
}
