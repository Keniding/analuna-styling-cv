import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, Button, AnimateOnScroll],
  templateUrl: './pricing-section.html'
})
export class PricingSection {
  readonly whatsappNumber = '51983438583';

  readonly reasons = [
    {
      icon: 'pi pi-user-edit',
      title: 'Evaluación Personalizada',
      description: 'Cada cotización se ajusta a tu biotipo, el diseño elegido y la técnica a aplicar.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Bioseguridad Garantizada',
      description: 'Insumos de alta gama y protocolos de bioseguridad en cada cita.'
    },
    {
      icon: 'pi pi-home',
      title: 'A Domicilio Disponible',
      description: 'Te atendemos en tu casa o lugar de trabajo. Consulta cobertura.'
    }
  ];

  cotizar(): void {
    const text = 'Hola Analuna Atelier, quiero cotizar un tratamiento';
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
