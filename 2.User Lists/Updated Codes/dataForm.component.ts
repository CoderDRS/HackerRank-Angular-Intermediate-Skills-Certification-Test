import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../types/Item';

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})
export class DataForm {
  name: string = '';
  genre: string = '';
  creator: string = '';
  type: string = '';
  totalTime: number | null = null;

  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  addItem() {
    if (!this.name || !this.genre || !this.creator || !this.type) return;

    const newItem: Item = {
      name: this.name,
      genre: this.genre,
      creator: this.creator,
      type: this.type,
      totalTime: this.type === 'Song' ? this.totalTime : undefined
    };

    this.onItemAdded.emit(newItem);

    // Reset fields
    this.name = '';
    this.genre = '';
    this.creator = '';
    this.type = '';
    this.totalTime = null;
  }
}
