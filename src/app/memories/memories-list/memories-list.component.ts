import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Memories } from '../memories.model';
import { MemoriesService } from '../memories.service';

@Component({
  selector: 'app-memories-list',
  templateUrl: './memories-list.component.html',
  styleUrl: './memories-list.component.css'
})
export class MemoriesListComponent implements OnInit, OnDestroy{
  private subscription : Subscription;
  memories: Memories[] = [];

  constructor(private memoriesService: MemoriesService){
  }

  ngOnInit(){
    this.memoriesService.getMemories();
  
    this.subscription =  this.memoriesService.memoryListChangedEvent
    .subscribe(
      (memoryList: Memories[]) => {
        this.memories = memoryList;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
