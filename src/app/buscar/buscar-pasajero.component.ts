import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BuscarPasajeroService } from './buscar.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './buscar-pasajero.component.html',
  styleUrls: ['./buscar-pasajero.component.scss']
})
export class BuscarPasajeroComponent {
  placesForm: FormGroup;

  get disponibilidades(): FormArray {
    return this.placesForm.get('disponibilidades') as FormArray;
  }

  getNewDisponibilidad(): FormGroup {
    return this.fb.group({
      fecha: this.fb.control(''),
      horaSalida: this.fb.control(''),
      horaLlegada: this.fb.control('')
    });
  }

  addDisponibilidad(): void {
    this.disponibilidades.push(
      this.getNewDisponibilidad()
    );
  }

  send(): void {
    this.buscarPasajeroService.buscarPasajeros(this.placesForm.value);
    this.router.navigate(['/listar/pasajeros']);
  }

  constructor(
    private fb: FormBuilder,
    private buscarPasajeroService: BuscarPasajeroService,
    private router: Router
  ) {
    this.placesForm = this.fb.group({
      salida: this.fb.control(''),
      destino: this.fb.control(''),
      disponibilidades: this.fb.array([
        this.getNewDisponibilidad()
      ])
    });
  }
}