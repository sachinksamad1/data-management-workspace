import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDataItemComponent } from './add-data-item/add-data-item.component';
import { DataListComponent } from './data-list/data-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AddDataItemComponent,
    DataListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-manager-app';
}
