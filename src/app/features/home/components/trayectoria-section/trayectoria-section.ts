import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScroll } from 'primeng/animateonscroll';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

interface Project {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-trayectoria-section',
  standalone: true,
  imports: [CommonModule, AnimateOnScroll],
  templateUrl: './trayectoria-section.html'
})
export class TrayectoriaSection {
  readonly experiences: Experience[] = [
    {
      role: 'Founder & Lead Specialist | Analuna Atelier',
      company: 'Analuna Atelier',
      location: 'Lima, Perú',
      period: '2026 — Presente',
      description: 'Creación y dirección de marca. Gestión de protocolos de atención, fidelización de clientes mediante experiencias de lujo y ejecución de servicios de cosmética dermatológica y estética de manos/pies.',
      current: true
    },
    {
      role: 'Especialista en Cuidado Podológico y de Manos',
      company: 'Zen Feet',
      location: 'Lima, Perú',
      period: '2026',
      description: 'Atención especializada en centros de podoestética, enfocada en el cuidado clínico y estético de manos y pies.',
      current: false
    },
    {
      role: 'Manicurista y Especialista en Spa',
      company: 'Angels Nails Salón',
      location: 'Lima, Perú',
      period: '2025',
      description: 'Prestación de servicios avanzados en sistemas de uñas y aplicación de tratamientos tipo spa orientados al relax y bienestar.',
      current: false
    },
    {
      role: 'Especialista en Manicura y Pedicura',
      company: 'La Esmaltería',
      location: 'Lima, Perú',
      period: '2021 — 2024',
      description: 'Ejecución de servicios especializados de manicura y pedicura con altos estándares de calidad, diseño y cuidado detallado.',
      current: false
    },
    {
      role: 'Especialista en Belleza Integral',
      company: 'Grettas Studio',
      location: 'Lima, Perú',
      period: '2020',
      description: 'Desarrollo de servicios estéticos iniciales en salón, enfocados en la atención personalizada y el cuidado del cliente.',
      current: false
    }
  ];

  readonly projects: Project[] = [
    {
      icon: 'pi pi-verified',
      title: 'Analuna Atelier: Identidad y Marca',
      description: 'Desarrollo de la marca desde cero, creación de protocolos de servicio, identidad visual y estrategia de atención al cliente.'
    },
    {
      icon: 'pi pi-heart-fill',
      title: 'Protocolos de Cuidado Facial',
      description: 'Diseño de una metodología propia para limpiezas y tratamientos faciales personalizados, logrando una mejora notable en la salud de la piel de mis clientas.'
    },
    {
      icon: 'pi pi-crown',
      title: 'Innovación en Estética Capilar',
      description: 'Desarrollo de servicios de estilismo capilar, incluyendo alisados de alto desempeño y tratamientos de nutrición profunda, con un fuerte compromiso en la restauración de la fibra capilar mediante productos certificados.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Excelencia en Manicura Técnica',
      description: 'Implementación de estándares de bioseguridad nivel clínico para sistemas de uñas, asegurando salud ungueal y resultados duraderos.'
    }
  ];
}
