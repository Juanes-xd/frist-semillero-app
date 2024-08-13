import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'plantillaModule',
    loadChildren: () =>
      import('./modules/plantilla/plantilla.module').then(
        (m) => m.PlantillaModule
      ),
  },
];
