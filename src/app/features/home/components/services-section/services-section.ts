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
  features: string[];
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, Card, Button, Tag, AnimateOnScroll],
  templateUrl: './services-section.html'
})
export class ServicesSection {
  readonly whatsappNumber = '51983438583';

  readonly services: Service[] = [
    {
      title: 'Estética de Uñas',
      description: 'Diseño y cuidado de uñas con técnicas profesionales de vanguardia.',
      icon: 'pi pi-palette',
      image: 'assets/images/gallery/nail-06-full.jpg',
      tag: 'Popular',
      tagSeverity: 'success',
      features: [
        'Uñas en Gel',
        'Soft Gel',
        'Rubber',
        'Builder Gel',
        'Diseño de uñas'
      ]
    },
    {
      title: 'Tratamientos Faciales',
      description: 'Protocolos de limpieza y cuidado facial con insumos de alta gama.',
      icon: 'pi pi-heart-fill',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
      tag: 'Cosmética Dermatológica',
      tagSeverity: 'info',
      features: [
        'Limpieza facial',
        'Hidratación profunda'
      ]
    },
    {
      title: 'Masofilaxia Corporal',
      description: 'Tratamiento corporal para tu relajación y bienestar integral.',
      icon: 'pi pi-sparkles',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      tag: 'Bienestar',
      tagSeverity: 'secondary',
      features: [
        'Masofilaxia corporal'
      ]
    },
    {
      title: 'Depilación',
      description: 'Técnicas modernas de depilación para una piel suave.',
      icon: 'pi pi-sun',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop',
      tag: 'Cuidado',
      tagSeverity: 'warn',
      features: [
        'Depilación'
      ]
    },
    {
      title: 'Estética Capilar',
      description: 'Técnicas de alisado, tinte y recuperación de fibra capilar.',
      icon: 'pi pi-crown',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
      tag: 'Tendencia',
      tagSeverity: 'info',
      features: [
        'Tinte',
        'Alisados'
      ]
    }
  ];

  cotizar(title: string): void {
    const text = `Hola Analuna Atelier, quiero cotizar: ${title}`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
