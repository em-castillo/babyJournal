import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Milestones } from './milestones.model';

@Injectable({
    providedIn: 'root'
  })

  export class MilestonesService{
    milestoneSelectedEvent = new EventEmitter<Milestones>();

    private milestones: Milestones[] = [];
    milestoneListChangedEvent = new Subject<Milestones[]>();

    milestonesListClone: Milestones[];
    maxMilestoneId: number;


    constructor(private http: HttpClient) {
        this.maxMilestoneId = this.getMaxId();
   }

    ngOnInit() {
        this.getMilestones();
    }

    getMaxId(): number {

        let maxId = 0;
    
        this.milestones.forEach(milestone => {
            const currentId = +milestone.id
            if (currentId > maxId) {
                maxId = currentId;
      }
      })
    
        return maxId;
      }


    getMilestones(): any {
        this.http.get('http://localhost:3000/milestones')
        .subscribe({
        next: (milestoneData: {message: string, milestones: Milestones[] }) => {
            this.milestones = milestoneData.milestones;
            this.maxMilestoneId = this.getMaxId();
            this.milestonesListClone = this.milestones.slice();
            this.milestoneListChangedEvent.next(this.milestonesListClone);
            console.log(this.milestones);
        },
        
        error: (error: any) => {
            console.error(error);
        }, 
    })
    }

    getMilestone(id: string): Milestones{
    return this.milestones.find((c) => c.id === id);
    }

    storeDocuments() {
        const milString = JSON.stringify(this.milestones);
        const httpHeaders = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
        this.http.put('http://localhost:3000/milestones',
        milString, httpHeaders)
        .subscribe(response => {
          this.milestoneListChangedEvent.next(this.milestones.slice());
        })
      }


  }