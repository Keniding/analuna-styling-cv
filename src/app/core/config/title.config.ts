import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from '@core/strategies/custom-title.strategy';

export function provideTitleStrategy() {
  return { provide: TitleStrategy, useClass: CustomTitleStrategy };
}
