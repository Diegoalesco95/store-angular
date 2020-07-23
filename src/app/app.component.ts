import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, @Inject(DOCUMENT) private doc: Document) {
    if (isPlatformBrowser(this.doc)) {
      const navEndEvents$ = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      );
      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', '240624695', {
          page_path: event.urlAfterRedirects,
        });
      });
    }
  }
}
