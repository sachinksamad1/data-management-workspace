import { Component } from '@angular/core';
import { DataService, DataItem } from '../../../../shared-data-service/src/public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-data-item',
  templateUrl: './add-data-item.component.html',
  styleUrls: ['./add-data-item.component.css'],
  imports: [FormsModule],
})
export class AddDataItemComponent {
  newItemName = '';
  newItemDescription = '';

  constructor(private dataService: DataService) { }

  addItem(): void {
    if (this.newItemName && this.newItemDescription) {
      this.dataService.addDataItem({ name: this.newItemName, description: this.newItemDescription });
      this.newItemName = '';
      this.newItemDescription = '';
    }
  }
}