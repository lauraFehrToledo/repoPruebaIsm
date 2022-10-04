import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { applyPolyfills, defineCustomElements } from '@imv/ui-kit/loader';

if (environment.production) {
  enableProdMode();
}

Promise.all([platformBrowserDynamic().bootstrapModule(AppModule),
   applyPolyfills()])
    .then(() => defineCustomElements())
    .catch(err => console.error(err));