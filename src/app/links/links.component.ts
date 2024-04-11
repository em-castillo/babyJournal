import { Component } from '@angular/core';
import { Link } from './links.model';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  selectedLink: Link;

  constructor(private linksService: LinksService){
  }
  
  ngOnInit() {
    this.linksService.linkSelectedEvent
    .subscribe(
      (link: Link) => {
        this.selectedLink = link;
      }
      );
  }

}
