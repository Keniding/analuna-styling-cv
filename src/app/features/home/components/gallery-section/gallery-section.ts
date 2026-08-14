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

interface GalleryVideo {
  src: string;
  poster: string;
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
      itemImageSrc: 'assets/images/gallery/nail-08-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-08-thumb.jpg',
      alt: 'French cromado iridiscente',
      title: 'French Cromado Iridiscente'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-03-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-03-thumb.jpg',
      alt: 'Nail art floral en tono vino',
      title: 'Nail Art Floral Vino'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-04-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-04-thumb.jpg',
      alt: 'Diseño vino con perlas y estrellas doradas',
      title: 'Vino con Perlas y Estrellas'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-06-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-06-thumb.jpg',
      alt: 'Nail art marmoleado en tono lila',
      title: 'Marmoleado Lila'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-01-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-01-thumb.jpg',
      alt: 'Manicure nude con puntos blancos',
      title: 'Nude con Puntos'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-02-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-02-thumb.jpg',
      alt: 'Diseño en blanco y celeste',
      title: 'Azul y Blanco'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-05-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-05-thumb.jpg',
      alt: 'Esmaltado chocolate con glitter',
      title: 'Chocolate y Glitter'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-07-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-07-thumb.jpg',
      alt: 'French manicure clásico',
      title: 'French Clásico'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-11-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-11-thumb.jpg',
      alt: 'Esmaltado negro con foil rosa dorado',
      title: 'Negro con Foil Dorado'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-14-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-14-thumb.jpg',
      alt: 'Nail art animal print leopardo',
      title: 'Animal Print'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-10-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-10-thumb.jpg',
      alt: 'Esmaltado vino con margaritas blancas',
      title: 'Vino con Margaritas'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-17-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-17-thumb.jpg',
      alt: 'Nail art de flores blanco y negro',
      title: 'Flores Blanco y Negro'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-09-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-09-thumb.jpg',
      alt: 'French celeste con swirls blancos',
      title: 'Azul con Swirls'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-16-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-16-thumb.jpg',
      alt: 'Nude minimalista con hojas',
      title: 'Nude Minimalista'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-12-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-12-thumb.jpg',
      alt: 'French con glitter plateado',
      title: 'French Glitter Plata'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-15-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-15-thumb.jpg',
      alt: 'Nude con glitter plateado y hoja',
      title: 'Nude Glitter con Hoja'
    },
    {
      itemImageSrc: 'assets/images/gallery/nail-13-full.jpg',
      thumbnailImageSrc: 'assets/images/gallery/nail-13-thumb.jpg',
      alt: 'Nude con puntas de glitter plateado',
      title: 'Nude con Glitter'
    }
  ];

  videos: GalleryVideo[] = [
    {
      src: 'assets/videos/video-01.mp4',
      poster: 'assets/images/gallery/video-01-poster.jpg',
      alt: 'Proceso de manicure francesita',
      title: 'Empezando la semana con las uñas listas'
    },
    {
      src: 'assets/videos/video-02.mp4',
      poster: 'assets/images/gallery/video-02-poster.jpg',
      alt: 'Detalle de manicure francesita con glitter',
      title: 'Tus uñas son tu reflejo, cuídalas muy bien'
    },
    {
      src: 'assets/videos/video-03.mp4',
      poster: 'assets/images/gallery/video-03-poster.jpg',
      alt: 'Resultado de nail art floral vino',
      title: 'The Moment'
    },
    {
      src: 'assets/videos/video-04.mp4',
      poster: 'assets/images/gallery/video-04-poster.jpg',
      alt: 'Nail art con números y letras',
      title: 'Nail Art Creativo'
    },
    {
      src: 'assets/videos/video-05.mp4',
      poster: 'assets/images/gallery/video-05-poster.jpg',
      alt: 'Esmaltado morado con glitter',
      title: 'Así es la q...'
    },
    {
      src: 'assets/videos/video-06.mp4',
      poster: 'assets/images/gallery/video-06-poster.jpg',
      alt: 'Esmaltado naranja',
      title: "Sabemo' que la gente está de m..."
    },
    {
      src: 'assets/videos/video-07.mp4',
      poster: 'assets/images/gallery/video-07-poster.jpg',
      alt: 'Nail art geométrico negro y plata',
      title: "But you're not coming home with me tonight"
    },
    {
      src: 'assets/videos/video-08.mp4',
      poster: 'assets/images/gallery/video-08-poster.jpg',
      alt: 'Nail art de fantasmas Halloween',
      title: 'Halloween Waltz'
    },
    {
      src: 'assets/videos/video-09.mp4',
      poster: 'assets/images/gallery/video-09-poster.jpg',
      alt: 'Detalle de manicure con glitter blanco',
      title: 'Detalle de Acabado'
    }
  ];

  playingVideo: number | null = null;

  playVideo(index: number): void {
    this.playingVideo = index;
  }

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

  displayLightbox = false;
  activeIndex = 0;

  openImage(index: number): void {
    this.activeIndex = index;
    this.displayLightbox = true;
  }
}
