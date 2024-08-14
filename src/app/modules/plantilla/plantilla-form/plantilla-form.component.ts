import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-plantilla-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './plantilla-form.component.html',
  styleUrl: './plantilla-form.component.css',
})
export class PlantillaFormComponent {
  formGroup = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
  });
  crearPlantilla(): void {}
}
