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
    { icon: 'pi pi-instagram', url: '#', label: 'Instagram' },
    { icon: 'pi pi-facebook', url: '#', label: 'Facebook' },
    { icon: 'pi pi-whatsapp', url: '#', label: 'WhatsApp' },
    { icon: 'pi pi-twitter', url: '#', label: 'Twitter' },
  ];

  readonly quickLinks = [
    { label: 'Servicios', route: '/servicios', icon: 'pi pi-sparkles' },
    { label: 'Portafolio', route: '/portafolio', icon: 'pi pi-images' },
    { label: 'Sobre Mí', route: '/sobre-mi', icon: 'pi pi-user' },
    { label: 'Contacto', route: '/contacto', icon: 'pi pi-envelope' },
  ];

  readonly contactInfo = [
    { icon: 'pi pi-phone', text: '+51 999 999 999', type: 'phone' },
    { icon: 'pi pi-envelope', text: 'contacto@analuna.com', type: 'email' },
    { icon: 'pi pi-map-marker', text: 'Lima, Perú', type: 'location' },
    { icon: 'pi pi-clock', text: 'Lun - Sáb: 9:00 - 20:00', type: 'schedule' }
  ];
}
