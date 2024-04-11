import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { WindRefService } from '../../wind-ref.service';
import { Link } from '../links.model';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrl: './links-detail.component.css'
})
export class LinksDetailComponent {

  link: Link; 
  id: string;
  nativeWindow: any;

  constructor(private linkService: LinksService,
    private route: ActivatedRoute, 
    private router: Router,
    private windRefService: WindRefService
    ){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.link = this.linkService.getLink(this.id);
      }
    );
    this.nativeWindow = this.windRefService.getNativeWindow()
  }

  OnView(){
    if (this.link.url) {
      this.nativeWindow.open(this.link.url);
    }
  }

  onDelete() {
    this.linkService.deleteLink(this.link);
    this.router.navigate(['/links'], {relativeTo: this.route});
    console.log('deleted');
 }

}
