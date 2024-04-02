import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-list',
  templateUrl: './ms-list.component.html',
  styleUrl: './ms-list.component.css'
})
export class MsListComponent {
  private subscription: Subscription;
  term: string;

}
