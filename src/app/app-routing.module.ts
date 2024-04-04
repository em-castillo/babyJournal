import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilestonesComponent } from './milestones/milestones.component';
import { MsDetailComponent } from './milestones/ms-detail/ms-detail.component';
import { MemoriesComponent } from './memories/memories.component';
import { MemoriesEditComponent } from './memories/memories-list/memories-edit.component';
import { MemoriesPostComponent } from './memories/memories-post/memories-post.component';
import { MsListComponent } from './milestones/ms-list/ms-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/milestones', pathMatch: 'full'},
  {path: 'milestones', component: MilestonesComponent, children: [
    {path: ':id' , component: MsListComponent},
  ]},
  {path: 'memories', component: MemoriesComponent, children: [
    {path: 'new' , component: MemoriesPostComponent},
    {path: ':id' , component: MemoriesEditComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
