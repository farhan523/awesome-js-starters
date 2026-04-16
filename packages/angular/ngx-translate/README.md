# @ngx-translate/core

> Internationalization (i18n) library for Angular — translate your app using JSON files with runtime language switching and pipe/directive support.

**npm:** https://www.npmjs.com/package/@ngx-translate/core
**GitHub:** https://github.com/ngx-translate/core
**Docs:** https://github.com/ngx-translate/core

---

## The Problem

Angular's built-in i18n requires rebuilding the app for each locale and doesn't support runtime language switching. Managing translations in separate HTML files is cumbersome for large apps.

---

## What It Does

`@ngx-translate/core` loads translation JSON files at runtime and provides a `TranslatePipe`, `TranslateDirective`, and `TranslateService` for switching languages without a page reload. The `@ngx-translate/http-loader` fetches translation files lazily from your server.

---

## Installation

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

---

## Usage Example

```typescript
// app.module.ts
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] },
      defaultLanguage: 'en',
    }),
  ],
})
export class AppModule {}
```

```html
<!-- template -->
<h1>{{ 'WELCOME.TITLE' | translate }}</h1>
<button (click)="translate.use('de')">Deutsch</button>
```

---

## Screenshot / Demo

<!-- https://github.com/ngx-translate/core -->

---

## Submitted by

[@claude](https://github.com/claude)
