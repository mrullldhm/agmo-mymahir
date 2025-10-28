import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { DirectivePage } from './pages/directive-page/directive-page';
import { ToDoPage } from './pages/to-do-page/to-do-page';

export const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'calculator', component: CalculatorPage },
  { path: 'directive', component: DirectivePage },
  { path: 'todo', component: ToDoPage },
];
