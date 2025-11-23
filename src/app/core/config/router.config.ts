import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';
import {routes} from '@app/app.routes';

export function provideRouterConfig() {
  return provideRouter(
    routes,
    withPreloading(PreloadAllModules),
    withViewTransitions(),
    withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    }),
    withRouterConfig({
      onSameUrlNavigation: 'reload'
    })
  );
}
