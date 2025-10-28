import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.modules';

@Component({
  selector: 'app-directive-page',
  imports: [...SharedModules],
  standalone: true,
  templateUrl: './directive-page.html',
  styleUrl: './directive-page.scss',
})
export class DirectivePage {
  showListFootballs: boolean = true;
  footballs = [
    { club: 'Barcelona FC', player: 'Lionel Messi' },
    { club: 'Real Madrid FC', player: 'Cristiano Ronaldo' },
    { club: 'Liverpool FC', player: 'Mohamed Salah' },
    { club: 'Bayern Munich FC', player: 'Harry Kane' },
  ];

  onToggleChange(): void {
    this.showListFootballs = !this.showListFootballs;
    console.log(this.showListFootballs)
  }
}
