import {inject, Injectable} from '@angular/core';
import {Title as TitleBrowser} from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  private readonly appSuffix = ` - ${environment.name}`;
  private readonly title = inject(TitleBrowser)

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title === undefined) {
      this.title.setTitle(`${environment.app}${this.appSuffix}`);
    } else {
      this.title.setTitle(`${title}${this.appSuffix}`);
    }
  }
}
