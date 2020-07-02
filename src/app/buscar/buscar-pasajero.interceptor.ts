import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class BuscarPasajeroInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Hemos conseguido interceptar la llamada HTTP');
    return of(
      new HttpResponse({
        status: 200,
        body: {
          'nombre': 'Francisco José Cotán López'
        }
      })
    );
  }

}