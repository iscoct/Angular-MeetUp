import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BuscarPasajeroService {
  private buscarPasajeroUrl = 'api/buscar-pasajero';
  private informacionPasajeros;

  constructor(
    private http: HttpClient
  ) { }

  buscarPasajeros(informacionPasajero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(`Informacion del pasajero recibida en buscarPasajero: ${JSON.stringify(informacionPasajero)}`);

    this.http.post<any>(this.buscarPasajeroUrl, informacionPasajero, { headers })
      .subscribe({
        next: data => console.log(`Se ha completado la llamada POST http con: ${JSON.stringify(data)}`),
        error: error => console.error('Hubo un error')
      });
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.log(err);

    return throwError(errorMessage);
  }
}