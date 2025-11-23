import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { Avatar } from 'primeng/avatar';
import { Rating } from 'primeng/rating';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { FormsModule } from '@angular/forms';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, Carousel, Avatar, Rating, AnimateOnScroll, FormsModule],
  templateUrl: './testimonials-section.html'
})
export class TestimonialsSection {
  readonly testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'Cliente frecuente',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      comment: 'Excelente servicio! Ana es muy profesional y los resultados son increíbles. Mi piel nunca se había visto tan radiante. Totalmente recomendado.',
      date: 'Hace 2 semanas',
      service: 'Tratamiento Facial'
    },
    {
      name: 'Lucía Ramírez',
      role: 'Novia feliz',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment: 'El maquillaje de mi boda fue perfecto! Ana entendió exactamente lo que quería y el resultado superó mis expectativas. Gracias por hacer mi día especial.',
      date: 'Hace 1 mes',
      service: 'Maquillaje de Novias'
    },
    {
      name: 'Carmen Silva',
      role: 'Cliente satisfecha',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      comment: 'Los masajes corporales son divinos! El ambiente es muy acogedor y Ana siempre te hace sentir cómoda. Es mi lugar favorito para relajarme.',
      date: 'Hace 3 semanas',
      service: 'Tratamiento Corporal'
    },
    {
      name: 'Patricia Mendoza',
      role: 'Cliente regular',
      avatar: 'https://i.pravatar.cc/150?img=20',
      rating: 5,
      comment: 'Llevo años viniendo y siempre salgo encantada. La atención es personalizada y los productos que usa son de primera calidad. No cambio por nada!',
      date: 'Hace 1 semana',
      service: 'Manicure & Pedicure'
    },
    {
      name: 'Andrea Torres',
      role: 'Cliente nueva',
      avatar: 'https://i.pravatar.cc/150?img=32',
      rating: 5,
      comment: 'Primera vez que vengo y quedé fascinada. El diseño de cejas quedó perfecto y las extensiones de pestañas son naturales y hermosas. Volveré seguro!',
      date: 'Hace 4 días',
      service: 'Pestañas & Cejas'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
