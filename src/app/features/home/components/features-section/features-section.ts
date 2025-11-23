import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScroll } from 'primeng/animateonscroll';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, AnimateOnScroll],
  templateUrl: './features-section.html'
})
export class FeaturesSection {
  readonly features: Feature[] = [
    {
      icon: 'pi pi-users',
      title: 'Atención Personalizada',
      description: 'Cada cliente es único. Diseñamos tratamientos específicos según tus necesidades y tipo de piel.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: 'pi pi-shield',
      title: 'Productos Certificados',
      description: 'Trabajamos exclusivamente con marcas reconocidas internacionalmente y productos dermatológicamente probados.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: 'pi pi-clock',
      title: 'Horarios Flexibles',
      description: 'Agenda tu cita en el horario que mejor se adapte a ti. Disponibilidad de lunes a sábado.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      icon: 'pi pi-star',
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años de trayectoria profesional y cientos de clientas satisfechas nos respaldan.',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: 'pi pi-home',
      title: 'Ambiente Acogedor',
      description: 'Espacio diseñado para tu comodidad y relajación. Un refugio de paz y belleza.',
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Precios Justos',
      description: 'Calidad profesional a precios accesibles. Consulta nuestros paquetes y promociones especiales.',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];
}
