import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-viewer-app';
}
