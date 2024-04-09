import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Milestones } from '../milestones.model';
import { MilestonesService } from '../milestones.service';

@Component({
  selector: 'app-ms-post',
  templateUrl: './ms-post.component.html',
  styleUrl: './ms-post.component.css'
})
export class MsPostComponent implements OnInit{

  milestone: Milestones;
  id: string;

  @ViewChild('f') dlForm: NgForm;
  milestoneForm: FormGroup;


  constructor(private milestoneService: MilestonesService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    new FormGroup({
      'activity': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required)
    })

    // this.route.params
    //   .subscribe (
    //   (params: Params) => {
    //     this.id = params['id'];
    //     if (!this.id){
    //       this.editMode = false;
    //       return;
    //     }
    //     this.originalDocument = this.documentService.getDocument(this.id);
    
    //     if (!this.originalDocument) {
    //       return;
    //     }
    //      this.editMode = true;
    //      // clone original document
    //      this.document = JSON.parse(JSON.stringify(this.originalDocument)); 
    // }) 
    
  }

  onSubmit(form: NgForm){
  const value = form.value;
  this.milestone = new Milestones(value.id, value.activity, value.age);

  if (form.invalid) {
    return;
  }
  this.milestoneService.addMilestone(this.milestone);
  this.router.navigate(['../'], {relativeTo: this.route});
}


  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
