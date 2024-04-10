import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Memories } from './memories.model';

@Injectable({
    providedIn: 'root'
  })

  export class MemoriesService{
    memorySelectedEvent = new EventEmitter< Memories>();

    private memories: Memories[] = [];
    memoryListChangedEvent = new Subject<Memories[]>();

    maxMemoryId: number;
    memoriesListClone: Memories[];
    

    constructor(private http: HttpClient) {
        this.maxMemoryId = this.getMaxId();
    }

    
      getMemories() {
        this.http.get('http://localhost:3000/memories')
        .subscribe({
          next: (memoryData: {message: string, memories: Memories[]}) => {
             this.memories = memoryData.memories;
             this.maxMemoryId = this.getMaxId();
             this.memoriesListClone = this.memories.slice();
             this.memoryListChangedEvent.next(this.memoriesListClone);
            //  console.log(this.memories);
          },
          error: (error: any) => {
            console.error(error);
          }, 
       })
      }
    
      getMemory(id: string): Memories{
       return this.memories.find((c) => c.id === id);
      }
    
      getMaxId(): number {
    
        let maxId = 0;
    
        this.memories.forEach(memory => {
            const currentId = +memory.id
            if (currentId > maxId) {
                maxId = currentId;
      }
      })
    
        return maxId;
      }
    
      storeMemories() {
        const memoryString = JSON.stringify(this.memories);
        const httpHeaders = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
        this.http.put('http://localhost:3000/memories',
        memoryString, httpHeaders)
        .subscribe(response => {
          this.memoryListChangedEvent.next(this.memories.slice());
        })
      }
    
      addMemory(newMemory: Memories) {
        if (!newMemory) {
          return;
        }
        
        newMemory.id = '';
    
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
        this.http.post<{ message: string, memory: Memories }>('http://localhost:3000/memories/',
        newMemory, { headers: headers })
        .subscribe(
          (responseData) => {
            this.memories.push(responseData.memory);
              this.storeMemories();
            }
      );
          
      }
    
      updateMemory(originalMemory: Memories, newMemory: Memories) {
        if (!originalMemory || !newMemory) {
          return;
        }
    
        const pos = this.memories.findIndex(d => d.id === originalMemory.id);
    
        if (pos < 0) {
          return;
        }
    
        newMemory.id = originalMemory.id;
        newMemory._id = originalMemory._id;
    
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
        this.http.put('http://localhost:3000/memories/' + originalMemory.id,
          newMemory, { headers: headers })
          .subscribe(
            (response: Response) => {
              this.memories[pos] = newMemory;
            }
          );
      }
    
      deleteDocument(memory: Memories) {
        if (!memory) {
          return;
        }
    
        const pos = this.memories.findIndex(d => d.id === memory.id);
    
        if (pos < 0) {
          return;
        }
    
        this.http.delete('http://localhost:3000/memories/' + memory.id)
          .subscribe(
            (response: Response) => {
              this.memories.splice(pos, 1);
            }
          );
    }

  }