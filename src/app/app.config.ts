import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    //provideRouter(routes), provideClientHydration()
    provideRouter(routes),provideHttpClient()] //para usar la API "provideHttpClient"
};
