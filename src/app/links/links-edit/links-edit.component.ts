import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Link } from '../links.model';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-links-edit',
  templateUrl: './links-edit.component.html',
  styleUrl: './links-edit.component.css'
})
export class LinksEditComponent implements OnInit{

  originalLink: Link;
  link: Link;
  editMode: boolean = false;
  id: string;

  @ViewChild('f') dlForm: NgForm;
  linkForm: FormGroup;


  constructor(private linkService: LinksService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required)
    })

    this.route.params
      .subscribe (
      (params: Params) => {
        this.id = params['id'];
        if (!this.id){
          this.editMode = false;
          return;
        }
        this.originalLink = this.linkService.getLink(this.id);
    
        if (!this.originalLink) {
          return;
        }
         this.editMode = true;
         this.link = JSON.parse(JSON.stringify(this.originalLink)); 
    }) 
    
  }

  onSubmit(form: NgForm){
  const value = form.value;
  this.link = new Link(value._id, value.id, value.name, value.url, value.content);
  if (this.editMode) {
    this.linkService.updateLink(this.originalLink, this.link);
  } else {
    // this.documentService.addDocument(this.document);
  }
  this.router.navigate(['../'], {relativeTo: this.route});
}


  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
