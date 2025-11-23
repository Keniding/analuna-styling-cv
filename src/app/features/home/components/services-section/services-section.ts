import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { AnimateOnScroll } from 'primeng/animateonscroll';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
  tagSeverity: 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';
  price: string;
  features: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, Card, Button, Tag, AnimateOnScroll],
  templateUrl: './services-section.html'
})
export class ServicesSection {
  readonly services: Service[] = [
    {
      title: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y rejuvenecimiento facial con técnicas avanzadas.',
      icon: 'pi pi-star',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
      tag: 'Popular',
      tagSeverity: 'success',
      price: 'Desde S/. 80',
      features: [
        'Limpieza profunda',
        'Hidratación intensiva',
        'Masaje facial relajante'
      ]
    },
    {
      title: 'Tratamientos Corporales',
      description: 'Exfoliación, masajes y tratamientos reafirmantes para todo el cuerpo.',
      icon: 'pi pi-heart',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      tag: 'Nuevo',
      tagSeverity: 'info',
      price: 'Desde S/. 120',
      features: [
        'Exfoliación corporal',
        'Masajes terapéuticos',
        'Tratamientos reafirmantes'
      ]
    },
    {
      title: 'Maquillaje Profesional',
      description: 'Maquillaje para eventos especiales, novias y sesiones fotográficas.',
      icon: 'pi pi-palette',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
      tag: 'Premium',
      tagSeverity: 'warn',
      price: 'Desde S/. 150',
      features: [
        'Maquillaje social',
        'Maquillaje de novias',
        'Sesiones fotográficas'
      ]
    },
    {
      title: 'Depilación',
      description: 'Depilación con cera y técnicas modernas para una piel suave y sedosa.',
      icon: 'pi pi-sun',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop',
      tag: 'Oferta',
      tagSeverity: 'danger',
      price: 'Desde S/. 40',
      features: [
        'Depilación con cera',
        'Todas las zonas',
        'Productos hipoalergénicos'
      ]
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Cuidado completo de manos y pies con esmaltado semipermanente.',
      icon: 'pi pi-sparkles',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
      tag: 'Popular',
      tagSeverity: 'success',
      price: 'Desde S/. 50',
      features: [
        'Manicure spa',
        'Pedicure spa',
        'Esmaltado semipermanente'
      ]
    },
    {
      title: 'Pestañas & Cejas',
      description: 'Diseño, tinte y extensiones de pestañas para una mirada impactante.',
      icon: 'pi pi-eye',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=300&fit=crop',
      tag: 'Tendencia',
      tagSeverity: 'info',
      price: 'Desde S/. 60',
      features: [
        'Diseño de cejas',
        'Tinte de pestañas',
        'Extensiones de pestañas'
      ]
    }
  ];
}
