import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Badge } from 'primeng/badge';
import { AnimateOnScroll } from 'primeng/animateonscroll';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  badge?: string;
  badgeSeverity?: 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';
  features: string[];
  highlighted: boolean;
  buttonLabel: string;
  icon: string;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, Button, Badge, AnimateOnScroll],
  templateUrl: './pricing-section.html'
})
export class PricingSection {
  readonly plans: PricingPlan[] = [
    {
      name: 'Básico',
      description: 'Perfecto para cuidado mensual básico',
      price: '150',
      period: 'por mes',
      icon: 'pi pi-star',
      features: [
        '1 Limpieza facial profunda',
        '1 Manicure básico',
        '1 Pedicure básico',
        'Asesoría personalizada',
        '10% descuento en productos'
      ],
      highlighted: false,
      buttonLabel: 'Seleccionar Plan'
    },
    {
      name: 'Premium',
      description: 'El más popular entre nuestras clientas',
      price: '280',
      period: 'por mes',
      badge: 'Más Popular',
      badgeSeverity: 'success',
      icon: 'pi pi-heart',
      features: [
        '2 Tratamientos faciales',
        '2 Manicure & Pedicure spa',
        '1 Tratamiento corporal',
        'Diseño de cejas incluido',
        'Asesoría personalizada',
        '20% descuento en productos',
        'Prioridad en reservas'
      ],
      highlighted: true,
      buttonLabel: 'Seleccionar Plan'
    },
    {
      name: 'VIP',
      description: 'Experiencia completa de belleza',
      price: '450',
      period: 'por mes',
      badge: 'Mejor Valor',
      badgeSeverity: 'warn',
      icon: 'pi pi-crown',
      features: [
        '4 Tratamientos faciales premium',
        '4 Manicure & Pedicure spa',
        '2 Tratamientos corporales',
        'Diseño de cejas y pestañas',
        '1 Maquillaje profesional',
        'Masajes relajantes incluidos',
        'Asesoría personalizada',
        '30% descuento en productos',
        'Prioridad máxima en reservas',
        'Atención domiciliaria disponible'
      ],
      highlighted: false,
      buttonLabel: 'Seleccionar Plan'
    }
  ];

  readonly singleServices = [
    { name: 'Limpieza Facial', price: 'S/. 80' },
    { name: 'Tratamiento Facial Premium', price: 'S/. 120' },
    { name: 'Masaje Corporal', price: 'S/. 100' },
    { name: 'Manicure Spa', price: 'S/. 50' },
    { name: 'Pedicure Spa', price: 'S/. 60' },
    { name: 'Diseño de Cejas', price: 'S/. 40' },
    { name: 'Extensiones de Pestañas', price: 'S/. 80' },
    { name: 'Maquillaje Social', price: 'S/. 150' },
    { name: 'Maquillaje de Novias', price: 'S/. 250' },
    { name: 'Depilación Completa', price: 'S/. 120' }
  ];
}
