import { Component, OnInit } from '@angular/core';
import { Memories } from './memories.model';
import { MemoriesService } from './memories.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.css'
})
export class MemoriesComponent implements OnInit{
  selectedMemory: Memories;


  constructor(private memoriesService: MemoriesService){
  }
  
  ngOnInit() {
    this.memoriesService.memorySelectedEvent
    .subscribe(
      (memory: Memories) => {
        this.selectedMemory = memory;
      }
      );
  }
}
