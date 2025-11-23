import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, Button, AnimateOnScroll],
  templateUrl: './hero-section.html'
})
export class HeroSection {
  readonly stats = [
    { value: '500+', label: 'Clientas Felices' },
    { value: '15+', label: 'Años Experiencia' },
    { value: '25+', label: 'Tratamientos' }
  ];

  readonly stars = [1, 2, 3, 4, 5];
}
