import { Component, OnInit } from '@angular/core';
import { DataService, DataItem } from '../../../../shared-data-service/src/public-api';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  imports: [CommonModule],
})
export class DataListComponent implements OnInit {
  dataItems$!: Observable<DataItem[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataItems$ = this.dataService.data$;
  }

  deleteItem(id: number): void {
    this.dataService.deleteDataItem(id);
  }
}