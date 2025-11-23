import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import {GalleriaModule} from 'primeng/galleria';

interface GalleryImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [CommonModule, Button, AnimateOnScroll, GalleriaModule],
  templateUrl: './gallery-section.html'
})
export class GallerySection {
  images: GalleryImage[] = [
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=200&h=150&fit=crop',
      alt: 'Tratamiento facial',
      title: 'Tratamiento Facial Profesional'
    },
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=150&fit=crop',
      alt: 'Spa facial',
      title: 'Limpieza Profunda'
    },
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=150&fit=crop',
      alt: 'Maquillaje profesional',
      title: 'Maquillaje de Novias'
    },
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=200&h=150&fit=crop',
      alt: 'Tratamiento corporal',
      title: 'Tratamiento Corporal'
    },
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=150&fit=crop',
      alt: 'Manicure',
      title: 'Manicure Spa'
    },
    {
      itemImageSrc: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1200&h=800&fit=crop',
      thumbnailImageSrc: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=200&h=150&fit=crop',
      alt: 'Pestañas',
      title: 'Extensiones de Pestañas'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
