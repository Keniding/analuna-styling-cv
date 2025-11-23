import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button, ButtonDirective} from 'primeng/button';
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
    ButtonDirective,
    Tooltip
  ],
  templateUrl: './cta-section.html'
})
export class CtaSection implements OnInit, OnDestroy {
  visible: boolean = false;
  name: string = '';
  email: string = '';
  phone: string = '';
  date: Date | null = null;
  selectedService: Service | null = null;
  message: string = '';
  minDate: Date = new Date();

  readonly services: Service[] = [
    { name: 'Tratamiento Facial', value: 'facial' },
    { name: 'Tratamiento Corporal', value: 'corporal' },
    { name: 'Maquillaje Profesional', value: 'maquillaje' },
    { name: 'Manicure & Pedicure', value: 'manicure' },
    { name: 'Pestañas & Cejas', value: 'pestanas' },
    { name: 'Depilación', value: 'depilacion' },
    { name: 'Otro', value: 'otro' }
  ];

  ngOnInit() {
    window.addEventListener('open-booking-dialog', this.handleOpenDialog);
  }

  ngOnDestroy() {
    window.removeEventListener('open-booking-dialog', this.handleOpenDialog);
  }

  handleOpenDialog = () => {
    this.showDialog();
  };

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    console.log('Formulario enviado', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      service: this.selectedService,
      message: this.message
    });
    this.visible = false;
  }
}
