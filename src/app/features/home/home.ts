import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { ServicesSection } from './components/services-section/services-section';
import { FeaturesSection } from './components/features-section/features-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { PricingSection } from './components/pricing-section/pricing-section';
import { CtaSection } from './components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    AboutSection,
    ServicesSection,
    FeaturesSection,
    TestimonialsSection,
    GallerySection,
    PricingSection,
    CtaSection
  ],
  templateUrl: './home.html'
})
export class Home {}
