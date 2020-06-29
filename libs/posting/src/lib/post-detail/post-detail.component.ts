import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../../../post';
import { PostService } from '../../../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'importili-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;
   id:number;

  constructor(
    private postService : PostService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (!this.post)
    {    
      this.id= +this.activatedRoute.snapshot.paramMap.get('id');
    }
    this.getPost();
  }

  getPost():void
  {
    this.postService.getPost(this.id).subscribe(post => this.post=post);

  }

}
