import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaFormComponent } from './plantilla/plantilla-form/plantilla-form.component';

const routes: Routes = [
  {
    path: 'plantillaForm',
    component: PlantillaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillaRoutingModule {}
