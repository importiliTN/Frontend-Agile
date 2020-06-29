import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {SearchComponent} from './search/search.component';
const routes: Routes=
[
{
  path:'create', 
  component: CreatePostComponent
},
{
  path:'list', 
  component: PostListComponent
},
{
  path:'post/:id', 
  component: PostDetailComponent
},
{
  path: 'search',
  component: SearchComponent
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostingRoutingModule { }
