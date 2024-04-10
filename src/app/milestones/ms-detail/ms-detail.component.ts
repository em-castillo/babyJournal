import { Component, Input } from '@angular/core';
import { Milestones } from '../milestones.model';

@Component({
  selector: 'app-ms-detail',
  templateUrl: './ms-detail.component.html',
  styleUrl: './ms-detail.component.css'
})
export class MsDetailComponent {
  @Input() milestone:Milestones;
  @Input() index: number;

  selected_chart(input: HTMLInputElement) {
    input.checked === true
      ? console.log('true')
      : console.log('false');
  }
}
