import { ApplicationConfig } from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi, withFetch, withInterceptors} from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

// Configuraciones modulares
import { provideRouterConfig } from '@core/config/router.config';
import { providePrimeNGConfig } from '@core/config/primeng.config';
import { provideTitleStrategy } from '@core/config/title.config';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),

    // Router
    provideRouterConfig(),

    // Title Strategy
    provideTitleStrategy(),

    // HTTP Client
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch(),
      withInterceptors([
        // loadingInterceptor,
        // loggerInterceptor
      ])
    ),

    // PrimeNG UI
    providePrimeNGConfig(),
    MessageService,
    ConfirmationService,
    DialogService,
  ]
};
