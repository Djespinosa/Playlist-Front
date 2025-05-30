import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const username = 'admin';
  const password = 'admin123';
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: { Authorization: authHeader }
  });

  return next(authReq);
};
