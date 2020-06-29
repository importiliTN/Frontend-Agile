import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokensStorageService } from '../tokens/tokens-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokensStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.token.getToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.token.getToken()
        }
      })
    }
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];