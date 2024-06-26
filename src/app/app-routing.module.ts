import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MilestonesComponent } from './milestones/milestones.component';
import { MsListComponent } from './milestones/ms-list/ms-list.component';
import { MsPostComponent } from './milestones/ms-post/ms-post.component';

import { MemoriesComponent } from './memories/memories.component';
import { MemoriesDetailComponent } from './memories/memories-detail/memories-detail.component';
import { MemoriesEditComponent } from './memories/memories-edit/memories-edit.component';

import { LinksComponent } from './links/links.component';
import { LinksDetailComponent } from './links/links-detail/links-detail.component';
import { LinksEditComponent } from './links/links-edit/links-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/milestones', pathMatch: 'full'},
  {path: 'milestones', component: MilestonesComponent, children: [
    {path: 'new' , component: MsPostComponent},
    {path: ':id' , component: MsListComponent},
  ]},
  {path: 'memories', component: MemoriesComponent, children: [
    {path: 'new' , component: MemoriesEditComponent},
    {path: ':id' , component: MemoriesDetailComponent},
    {path: ':id/edit' , component: MemoriesEditComponent}
  ]},
  {path: 'links', component: LinksComponent, children: [
    {path: 'new' , component: LinksEditComponent},
    {path: ':id' , component: LinksDetailComponent},
    {path: ':id/edit' , component: LinksEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
