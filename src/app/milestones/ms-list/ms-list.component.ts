import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Milestones } from '../milestones.model';
import { MilestonesService } from '../milestones.service';

@Component({
  selector: 'app-ms-list',
  templateUrl: './ms-list.component.html',
  styleUrl: './ms-list.component.css'
})
export class MsListComponent {
  private subscription: Subscription;
  term: string;

  milestones: Milestones[] = [];

  search(value: string) {
    this.term = value;
    }

  constructor(private milestonesService: MilestonesService){}

  ngOnInit(){
    this.milestonesService.getMilestones();
      
    this.subscription = this.milestonesService.milestoneListChangedEvent
      .subscribe(
        (milestoneList: Milestones[]) => {
          this.milestones = milestoneList;
        }
        );
    }


  onSelected(milestone: Milestones){
    this.milestonesService.milestoneSelectedEvent.emit(milestone);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
