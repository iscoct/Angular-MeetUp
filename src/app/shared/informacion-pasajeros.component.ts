import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'informacion-pasajeros',
  templateUrl: './informacion-pasajeros.component.html',
  styleUrls: ['./informacion-pasajeros.component.scss']
})
export class InformacionPasajerosComponent implements OnInit {
  @Input() viajes;

  ngOnInit() {
    console.log(`Viajes: ${JSON.stringify(this.viajes)}`);
  }
}