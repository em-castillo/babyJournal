import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Memories } from '../memories.model';
import { MemoriesService } from '../memories.service';

@Component({
  selector: 'app-memories-edit',
  templateUrl: './memories-edit.component.html',
  styleUrl: './memories-edit.component.css'
})
export class MemoriesEditComponent implements OnInit{
  originalMemory: Memories;
  memory: Memories;
  editMode: boolean = false;
  id: string;

  @ViewChild('f') dlForm: NgForm;
  memoryForm: FormGroup;


  constructor(private memoryService: MemoriesService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    })

    this.route.params
      .subscribe (
      (params: Params) => {
        this.id = params['id'];
        if (!this.id){
          this.editMode = false;
          return;
        }
        this.originalMemory = this.memoryService.getMemory(this.id);
    
        if (!this.originalMemory) {
          return;
        }
         this.editMode = true;
         this.memory = JSON.parse(JSON.stringify(this.originalMemory)); 
    }) 
    
  }

  onSubmit(form: NgForm){
  const value = form.value;
  let newMemory = new Memories(value._id, value.id, value.title, value.description);
  if (this.editMode) {
    this.memoryService.updateMemory(this.originalMemory, newMemory);
  } else {
    this.memoryService.addMemory(newMemory);
    console.log(newMemory);
  }
  this.router.navigate(['../'], {relativeTo: this.route});
}


  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
