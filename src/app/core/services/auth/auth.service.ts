import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginRestApi(email: string, password: string) {
    return this.http
      .post(`${environment.url_api_auth}`, {
        email,
        password,
      })
      .pipe(
        tap((data: any) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        })
      );
  }
}
