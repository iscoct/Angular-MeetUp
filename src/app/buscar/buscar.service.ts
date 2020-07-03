import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BuscarPasajeroService {
  private buscarPasajeroUrl = 'api/buscar-pasajero';

  constructor(
    private http: HttpClient
  ) { }

  buscarPasajeros(informacionPasajero): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.buscarPasajeroUrl, informacionPasajero, { headers });
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