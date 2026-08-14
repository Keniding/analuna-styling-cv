import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './components/hero-section/hero-section';
import { ServicesSection } from './components/services-section/services-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { TrayectoriaSection } from './components/trayectoria-section/trayectoria-section';
import { PricingSection } from './components/pricing-section/pricing-section';
import { CtaSection } from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    ServicesSection,
    TestimonialsSection,
    GallerySection,
    TrayectoriaSection,
    PricingSection,
    CtaSection
  ],
  templateUrl: './home.html'
})
export class Home {}
