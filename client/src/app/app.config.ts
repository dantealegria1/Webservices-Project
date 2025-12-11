import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection, PLATFORM_ID } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { InitService } from '../core/services/init-service';
import { lastValueFrom } from 'rxjs';
import { errorInterceptor } from '../core/interceptors/error-interceptor';
import { jwtInterceptor } from '../core/interceptors/jwt-interceptor';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor, jwtInterceptor])),

    provideAppInitializer(async () => {
      const initService = inject(InitService);
      const platformId = inject(PLATFORM_ID);

      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          try {
            await lastValueFrom(initService.init());
          } finally {
            if (isPlatformBrowser(platformId)) {
              const splash = document.getElementById("initial-splash");
              splash?.remove();
            }
            resolve();
          }
        }, 500);
      });
    })
  ]
};
