import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../types/Item';

@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.scss']
})
export class DataList {
  @Input() dataList: Item[] = [];
  @Input() dataType: string = '';
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();

  deleteItem(item: Item) {
    this.onItemDelete.emit(item);
  }
}
