import { Pipe, PipeTransform } from '@angular/core';
import { Milestones } from './milestones.model';

@Pipe({
  name: 'milestonesFilter'
})
export class MilestonesFilterPipe implements PipeTransform {

  transform(milestones: Milestones[], term: string) { 
    let filteredMilestones: Milestones[] =[];  
    if (term && term.length > 0) {
       filteredMilestones = milestones.filter(
          (milestone:Milestones) => milestone.activity.toLowerCase().includes(term.toLowerCase())
       );
    }
    if (filteredMilestones.length < 1){
       return milestones;
    }
    return filteredMilestones;
 }

}
