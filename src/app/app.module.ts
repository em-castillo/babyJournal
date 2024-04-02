import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MemoriesComponent } from './memories/memories.component';
import { MsListComponent } from './milestones/ms-list/ms-list.component';
import { MsDetailComponent } from './milestones/ms-detail/ms-detail.component';
import { MemoriesPostComponent } from './memories/memories-post/memories-post.component';
import { MemoriesEditComponent } from './memories/memories-list/memories-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilestonesComponent,
    MemoriesComponent,
    MsListComponent,
    MsDetailComponent,
    MemoriesPostComponent,
    MemoriesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
