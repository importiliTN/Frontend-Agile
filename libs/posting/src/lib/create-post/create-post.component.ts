import { Component, OnInit } from '@angular/core';
import {Post} from '../../../post';
import {PostService} from '../../../post.service';
import {TokensStorageService} from 'libs/login/src/lib/tokens/tokens-storage.service';

@Component({
  selector: 'importili-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post :Post =new Post();
  submitted=false;

  constructor(
    private postService: PostService,
    private tokenStorageService: TokensStorageService
  ) { }

  ngOnInit(): void {
  }

  savePost()
  {
    this.postService.addPost(this.post).subscribe();
  }

onSubmit() 
{
  //this.post.poster=this.tokenStorageService.getUser().id;
  console.log(this.post);
  this.savePost();
  this.submitted=true;
}


}
