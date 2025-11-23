import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, Button, AnimateOnScroll],
  templateUrl: './about-section.html'
})
export class AboutSection {
  readonly features = [
    {
      icon: 'pi pi-check-circle',
      title: 'Certificación Internacional',
      description: 'Formación continua en las mejores academias de cosmetología'
    },
    {
      icon: 'pi pi-heart',
      title: 'Atención Personalizada',
      description: 'Cada tratamiento es único y adaptado a tus necesidades'
    },
    {
      icon: 'pi pi-shield',
      title: 'Productos Premium',
      description: 'Solo trabajamos con marcas reconocidas y de alta calidad'
    }
  ];
}
