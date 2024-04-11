import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Link } from './links.model';

@Injectable({
    providedIn: 'root'
  })

  export class LinksService{
    linkSelectedEvent = new EventEmitter<Link>();

    private links: Link[] = [];
    linkListChangedEvent = new Subject<Link[]>();

    maxLinkId: number;
    linksListClone: Link[];
    

    constructor(private http: HttpClient) {
        this.maxLinkId = this.getMaxId();
    }

    
    getLinks() {
        this.http.get('http://localhost:3000/links')
        .subscribe({
          next: (linkData: {message: string, links: Link[]}) => {
             this.links = linkData.links;
             this.maxLinkId = this.getMaxId();
             this.linksListClone = this.links.slice();
             this.linkListChangedEvent.next(this.linksListClone);
             console.log(this.links);
          },
          error: (error: any) => {
            console.error(error);
          }, 
       })
      }
    
      getLink(id: string): Link{
       return this.links.find((c) => c.id === id);
      }
    
      getMaxId(): number {
    
        let maxId = 0;
    
        this.links.forEach(link => {
            const currentId = +link.id
            if (currentId > maxId) {
                maxId = currentId;
      }
      })
    
        return maxId;
      }
    
      storeLinks() {
        const linkString = JSON.stringify(this.links);
        const httpHeaders = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
        this.http.put('http://localhost:3000/links',
        linkString, httpHeaders)
        .subscribe(response => {
          this.linkListChangedEvent.next(this.links.slice());
        })
      }

      addLink(link: Link) {
        if (!link) {
          return;
        }
    
        link.id = '';
    
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
        this.http.post<{ message: string, link: Link }>('http://localhost:3000/links',
        link,
          { headers: headers })
          .subscribe(
            (responseData) => {
              this.links.push(responseData.link);
              this.links.sort((a,b)=> {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
            }
          );
      }
    
    
      updateLink(originalLink: Link, newLink: Link) {
        if (!originalLink || !newLink) {
          return;
        }
    
        const pos = this.links.findIndex(d => d.id === originalLink.id);
    
        if (pos < 0) {
          return;
        }
    
        newLink.id = originalLink.id;
        newLink._id = originalLink._id;
    
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
        this.http.put('http://localhost:3000/links/' + originalLink.id,
          newLink, { headers: headers })
          .subscribe(
            (response: Response) => {
              this.links[pos] = newLink;
            }
          );
      }
    
      deleteLink(link: Link) {
        if (!link) {
          return;
        }
    
        const pos = this.links.findIndex(d => d.id === link.id);
    
        if (pos < 0) {
          return;
        }
    
        this.http.delete('http://localhost:3000/links/' + link.id)
          .subscribe(
            (response: Response) => {
              this.links.splice(pos, 1);
            }
          );
    
    }

  }