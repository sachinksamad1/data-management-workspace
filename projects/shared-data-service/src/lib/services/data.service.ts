import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataItem } from '../models/data-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataItems: DataItem[] = [
    { id: 1, name: 'Item A', description: 'Description for Item A' },
    { id: 2, name: 'Item B', description: 'Description for Item B' },
  ];
  private dataSubject = new BehaviorSubject<DataItem[]>(this.dataItems);
  public data$ = this.dataSubject.asObservable();

  addDataItem(newItem: Omit<DataItem, 'id'>): void {
    const newId = this.dataItems.length > 0 ? Math.max(...this.dataItems.map(item => item.id)) + 1 : 1;
    this.dataItems = [...this.dataItems, { id: newId, ...newItem }];
    this.dataSubject.next(this.dataItems);
  }

  deleteDataItem(id: number): void {
    this.dataItems = this.dataItems.filter(item => item.id !== id);
    this.dataSubject.next(this.dataItems);
  }

  // For simplicity, we're not implementing update for now
}