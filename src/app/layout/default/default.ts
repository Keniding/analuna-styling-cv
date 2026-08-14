import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    Navbar,
    Footer,
    SpeedDialModule
  ]
})
export class Default {
  readonly menuItems = [
    { label: 'Inicio', icon: 'pi pi-home', fragment: '' },
    { label: 'Servicios', icon: 'pi pi-sparkles', fragment: 'servicios' },
    { label: 'Portafolio', icon: 'pi pi-images', fragment: 'portafolio' },
    { label: 'Sobre Mí', icon: 'pi pi-user', fragment: 'sobre-mi' },
    { label: 'Contacto', icon: 'pi pi-envelope', fragment: 'contacto' }
  ];

  speedDialItems: MenuItem[] = [];

  constructor() {
    this.speedDialItems = this.menuItems.map(item => ({
      icon: item.icon,
      tooltipOptions: {
        tooltipLabel: item.label,
        tooltipPosition: 'left'
      },
      command: () => {
        this.scrollToFragment(item.fragment);
      }
    }));
  }

  scrollToFragment(fragment: string): void {
    if (fragment === 'sobre-mi') {
      window.dispatchEvent(new CustomEvent('show-about-slide'));
    }
    if (!fragment) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
