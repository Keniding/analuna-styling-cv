import {Component, OnDestroy, OnInit, PLATFORM_ID, inject} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {Button} from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { Dialog } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {Tooltip} from 'primeng/tooltip';

interface Service {
  name: string;
  value: string;
}

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [
    CommonModule,
    Button,
    InputText,
    Textarea,
    DatePicker,
    Select,
    Dialog,
    FormsModule,
    Tooltip
  ],
  templateUrl: './cta-section.html'
})
export class CtaSection implements OnInit, OnDestroy {
  visible: boolean = false;
  name: string = '';
  phone: string = '';
  date: Date | null = null;
  selectedService: Service | null = null;
  message: string = '';
  minDate: Date = new Date();

  readonly services: Service[] = [
    { name: 'Estética de Uñas', value: 'unas' },
    { name: 'Tratamientos Faciales', value: 'faciales' },
    { name: 'Masofilaxia Corporal', value: 'corporal' },
    { name: 'Depilación', value: 'depilacion' },
    { name: 'Estética Capilar', value: 'capilar' },
    { name: 'Servicio a Domicilio', value: 'domicilio' },
    { name: 'Otro', value: 'otro' }
  ];

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    if (this.isBrowser) {
      window.addEventListener('open-booking-dialog', this.handleOpenDialog);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('open-booking-dialog', this.handleOpenDialog);
    }
  }

  handleOpenDialog = () => {
    this.showDialog();
  };

  showDialog() {
    this.visible = true;
  }

  readonly whatsappNumber = '51983438583';

  onSubmit() {
    const dateText = this.date ? this.date.toLocaleDateString('es-PE') : 'sin definir';
    const lines = [
      `Hola Analuna Atelier, quiero reservar una cita:`,
      `Nombre: ${this.name}`,
      `Teléfono: ${this.phone}`,
      `Fecha preferida: ${dateText}`,
      `Servicio: ${this.selectedService?.name ?? 'sin especificar'}`,
      this.message ? `Mensaje: ${this.message}` : null
    ].filter(Boolean);

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    if (this.isBrowser) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    this.visible = false;
  }
}
