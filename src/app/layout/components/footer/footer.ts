import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    CardModule,
    TooltipModule,
    Ripple
  ],
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    { icon: 'pi pi-instagram', url: 'https://www.instagram.com/analuna_atelier1?igsh=YjFqenVmZHBhdGg0', label: 'Instagram' },
    { icon: 'pi pi-tiktok', url: 'https://www.tiktok.com/@analuna_atelier?_r=1&_t=ZS-96VCqMly9Zc', label: 'TikTok' },
    { icon: 'pi pi-whatsapp', url: 'https://wa.me/51983438583', label: 'WhatsApp' },
  ];

  readonly quickLinks = [
    { label: 'Servicios', route: '/servicios', icon: 'pi pi-sparkles' },
    { label: 'Portafolio', route: '/portafolio', icon: 'pi pi-images' },
    { label: 'Sobre Mí', route: '/sobre-mi', icon: 'pi pi-user' },
    { label: 'Contacto', route: '/contacto', icon: 'pi pi-envelope' },
  ];

  readonly contactInfo = [
    { icon: 'pi pi-whatsapp', text: '+51 983 438 583', type: 'phone' },
    { icon: 'pi pi-map-marker', text: 'Lima, Perú', type: 'location' },
    { icon: 'pi pi-clock', text: 'Lun - Sáb: 9:00 - 20:00', type: 'schedule' }
  ];
}
