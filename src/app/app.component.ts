import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

interface Token {
  token: string;
}
declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private tokenCollection: AngularFirestoreCollection<Token>;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private doc: Document,
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ) {
    this.tokenCollection = this.database.collection<Token>('tokens');

    if (isPlatformBrowser(this.doc)) {
      const navEndEvents$ = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      );
      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'GA-240624695', {
          page_path: event.urlAfterRedirects,
        });
      });
    }
  }

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available.subscribe((value) => {
      window.location.reload();
    });
  }

  requestPermission() {
    this.messaging.requestToken.subscribe((token) => {
      this.tokenCollection.add({ token });
    });
  }

  listenNotifications() {
    this.messaging.messages.subscribe((message) => {});
  }
}
