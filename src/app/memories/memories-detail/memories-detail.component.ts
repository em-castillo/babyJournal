import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { WindRefService } from '../../wind-ref.service';
import { Memories } from '../memories.model';
import { MemoriesService } from '../memories.service';

@Component({
  selector: 'app-memories-detail',
  templateUrl: './memories-detail.component.html',
  styleUrl: './memories-detail.component.css'
})
export class MemoriesDetailComponent {
  memory: Memories;
  id: string;
  nativeWindow: any;

  constructor(private memoryService: MemoriesService,
    private route: ActivatedRoute, 
    private router: Router,
    // private windRefService: WindRefService
    ){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.memory = this.memoryService.getMemory(this.id);
      }
    );
    // this.nativeWindow = this.windRefService.getNativeWindow()
  }

  // OnView(){
  //   if (this.memory.url) {
  //     this.nativeWindow.open(this.memory.url);
  //   }
  // }

  onDelete() {
    this.memoryService.deleteMemory(this.memory);
    this.router.navigate(['/memories'], {relativeTo: this.route});
    console.log('deleted');
 }

}
