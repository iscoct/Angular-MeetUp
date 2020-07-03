import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class BuscarPasajeroInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          'salida': 'Granada',
          'destino': 'Jerez de la Frontera',
          'viajes': [
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            },
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            },
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            },
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            },
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            },
            {
              'fecha': '18/02/2020',
              'horaSalida': '12:00',
              'horaLlegada': '14:00',
              'nombreUsuario': 'Francisco José Cotán López',
              'rating': 4,
              'precio': 10
            }
          ]
        }
      })
    );
  }

}