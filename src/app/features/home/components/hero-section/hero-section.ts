import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './hero-section.html'
})
export class HeroSection implements OnInit, AfterViewInit, OnDestroy {
  readonly stats = [
    { value: '500+', label: 'Clientas Felices' },
    { value: '15+', label: 'Años Experiencia' },
    { value: '25+', label: 'Tratamientos' }
  ];

  // Contenido "Sobre Mí"
  readonly name = 'Ana Claudia';
  readonly role = 'Founder & CEO de Analuna Atelier';

  readonly tagline =
    'Especialista en cosmética dermatológica y estética integral. Elevando la belleza a través de protocolos personalizados, bioseguridad de alto estándar y técnicas de vanguardia en Lima.';

  readonly bio =
    'Apasionada por la estética integral y la salud de la piel. Mi enfoque combina la formación académica rigurosa en el Instituto Naciones Unidas con años de experiencia práctica en el sector de la belleza. Analuna Atelier nació como un proyecto impulsado por la visión de ofrecer un servicio de alta gama, evolucionando hoy en una marca profesional donde cada servicio es tratado como una pieza única de cuidado y bienestar. Mi objetivo es elevar los estándares del rubro, ofreciendo soluciones estéticas que cuidan tu salud tanto como tu imagen.';

  readonly badges = [
    '#AnalunaAtelier',
    'Cosmetología Dermatológica',
    'Manicura & Pedicura Pro',
    'Estética Personalizada'
  ];

  readonly features = [
    {
      icon: 'pi pi-palette',
      title: 'Manicura & Pedicura Pro',
      description: 'Técnicas avanzadas en Soft Gel, Rubber, Builder Gel, manicura rusa y podología estética integral.'
    },
    {
      icon: 'pi pi-heart-fill',
      title: 'Cosmética Dermatológica',
      description: 'Evaluación de biotipos cutáneos, protocolos de limpieza facial profunda y tratamientos de hidratación con insumos de alta gama.'
    },
    {
      icon: 'pi pi-crown',
      title: 'Estética Capilar',
      description: 'Especialista en técnicas de alisados progresivos, nutrición y recuperación de fibra capilar con productos certificados.'
    },
    {
      icon: 'pi pi-briefcase',
      title: 'Gestión de Atelier',
      description: 'Estrategia de marca, atención al cliente de lujo, control estricto de bioseguridad y marketing especializado en belleza.'
    }
  ];

  // Carrusel de 2 slides: 0 = Presentación, 1 = Sobre Mí
  activeSlide = 0;
  containerHeight: number | null = null;
  readonly slideDurationMs = 7000;

  @ViewChildren('slidePanel') private slidePanels!: QueryList<ElementRef<HTMLElement>>;

  private intervalId?: ReturnType<typeof setInterval>;
  private readonly showAboutSlide = () => this.goToSlide(1);
  private readonly onResize = () => this.updateHeight();

  ngOnInit(): void {
    this.startAutoplay();
    window.addEventListener('show-about-slide', this.showAboutSlide);
    window.addEventListener('resize', this.onResize);
  }

  ngAfterViewInit(): void {
    // Deja que el navegador termine el primer layout antes de medir.
    setTimeout(() => this.updateHeight());
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    window.removeEventListener('show-about-slide', this.showAboutSlide);
    window.removeEventListener('resize', this.onResize);
  }

  goToSlide(index: number): void {
    if (index === this.activeSlide) {
      return;
    }
    this.setActiveSlide(index);
    this.restartAutoplay();
  }

  nextSlide(): void {
    this.goToSlide(this.activeSlide === 0 ? 1 : 0);
  }

  prevSlide(): void {
    this.goToSlide(this.activeSlide === 0 ? 1 : 0);
  }

  private setActiveSlide(index: number): void {
    this.activeSlide = index;
    this.updateHeight();
  }

  private updateHeight(): void {
    const panel = this.slidePanels?.get(this.activeSlide)?.nativeElement;
    if (panel) {
      this.containerHeight = panel.offsetHeight;
    }
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.setActiveSlide(this.activeSlide === 0 ? 1 : 0);
    }, this.slideDurationMs);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  onReservarClick(): void {
    globalThis.dispatchEvent(new CustomEvent('open-booking-dialog'));
  }

  scrollToId(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
