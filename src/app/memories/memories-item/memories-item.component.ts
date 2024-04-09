import { Component, Input } from '@angular/core';
import { Memories } from '../memories.model';

@Component({
  selector: 'app-memories-item',
  templateUrl: './memories-item.component.html',
  styleUrl: './memories-item.component.css'
})
export class MemoriesItemComponent {
  @Input() memory:Memories;
  @Input() index: number;
}
