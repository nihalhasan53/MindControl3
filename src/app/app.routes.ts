import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SquareComponent } from './square/square.component';

export const routes: Routes = [
  { path: '', redirectTo: 'input/3', pathMatch: 'full' }, // Redirect to 'input/3' by default
  { path: 'input/:template', component: InputComponent },
  { path: 'input/:template/:year', component: SquareComponent },
];
