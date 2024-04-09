import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MemoriesComponent } from './memories/memories.component';
import { MsListComponent } from './milestones/ms-list/ms-list.component';
import { MsDetailComponent } from './milestones/ms-detail/ms-detail.component';
import { MilestonesFilterPipe } from './milestones/ms-filter.pipe';
import { MsPostComponent } from './milestones/ms-post/ms-post.component';
import { MemoriesDetailComponent } from './memories/memories-detail/memories-detail.component';
import { MemoriesItemComponent } from './memories/memories-item/memories-item.component';
import { MemoriesListComponent } from './memories/memories-list/memories-list.component';
import { MemoriesEditComponent } from './memories/memories-edit/memories-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MilestonesComponent,
    MemoriesComponent,
    MsListComponent,
    MsDetailComponent,
    MilestonesFilterPipe,
    MsPostComponent,
    MemoriesDetailComponent,
    MemoriesItemComponent,
    MemoriesListComponent,
    MemoriesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
