import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from '../links.model';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.css'
})
export class LinksListComponent implements OnInit, OnDestroy{
  private subscription : Subscription;

  links: Link[]=[];

  constructor(private linksService: LinksService){
    
  }

  ngOnInit(){
    this.linksService.getLinks();
  
    this.subscription =  this.linksService.linkListChangedEvent
    .subscribe(
      (linkList: Link[]) => {
        this.links = linkList;
      }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
