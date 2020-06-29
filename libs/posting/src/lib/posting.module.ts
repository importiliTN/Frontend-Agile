import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostingRoutingModule} from './posting-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchComponent } from './search/search.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    PostingRoutingModule,
    ],
  declarations: [CreatePostComponent, PostListComponent, PostDetailComponent, SearchComponent],
  exports: [CreatePostComponent]
})
export class PostingModule {}