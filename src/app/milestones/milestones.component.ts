import { Component, OnInit } from '@angular/core';
import { Milestones } from './milestones.model';
import { MilestonesService } from './milestones.service';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.css'
})
export class MilestonesComponent implements OnInit{
  selectedMilestone: Milestones;

  constructor(private milestonesService: MilestonesService){
  }

  ngOnInit() {
    this.milestonesService.milestoneSelectedEvent
    .subscribe(
      (milestone: Milestones) => {
        this.selectedMilestone = milestone;
      }
      );
  }


}
