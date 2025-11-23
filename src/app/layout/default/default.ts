import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { Navbar } from '@layout/components/navigation/navbar/navbar';
import { Footer } from '@layout/components/footer/footer';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-default',
  templateUrl: './default.html',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Navbar,
    Footer,
    SpeedDialModule
  ]
})
export class Default {
  readonly menuItems = [
    { label: 'Inicio', icon: 'pi pi-home', route: '/' },
    { label: 'Servicios', icon: 'pi pi-sparkles', route: '/servicios' },
    { label: 'Portafolio', icon: 'pi pi-images', route: '/portafolio' },
    { label: 'Sobre Mí', icon: 'pi pi-user', route: '/sobre-mi' },
    { label: 'Contacto', icon: 'pi pi-envelope', route: '/contacto' }
  ];

  speedDialItems: MenuItem[] = [];

  constructor(private readonly router: Router) {
    this.speedDialItems = this.menuItems.map(item => ({
      icon: item.icon,
      tooltipOptions: {
        tooltipLabel: item.label,
        tooltipPosition: 'left'
      },
      command: () => {
        this.router.navigate([item.route]);
      }
    }));
  }
}
