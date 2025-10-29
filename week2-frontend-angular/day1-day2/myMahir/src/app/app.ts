import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./components/toolbar/toolbar";
import { AddDialog } from "./components/add-dialog/add-dialog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, AddDialog],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('MyMahir - Agmo');
}
