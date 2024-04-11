import { Component, Input } from '@angular/core';
import { Link } from '../links.model';

@Component({
  selector: 'app-links-item',
  templateUrl: './links-item.component.html',
  styleUrl: './links-item.component.css'
})
export class LinksItemComponent {
  @Input() link:Link;
  @Input() index: number;

}
