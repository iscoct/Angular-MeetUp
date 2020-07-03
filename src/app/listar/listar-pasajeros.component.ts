import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  templateUrl: './listar-pasajeros.component.html',
  styleUrls: ['./listar-pasajeros.component.scss']
})
export class ListarPasajerosComponent {
  userRate: number = 1;
  busquedaPasajeros: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.busquedaPasajeros = this.location.getState();
  }

}