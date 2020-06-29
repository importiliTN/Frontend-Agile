import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {Postlist} from '../../../postlist';
import {PostService} from '../../../post.service';
import {ActivatedRoute} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import {Post} from '../../../post';

@Component({
  selector: 'importili-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild("sidenav") sidenav: MatSidenav;
  chosenPost:Post;
  page=0;
  @Input() list:Post[];
  @Input() total:number;
  @Input() searchMode=false;
  @Output() pageChange=new EventEmitter<number>();

  constructor(
    private postService : PostService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    if (!this.list)
  this.getList();
  }

  getList(): void
  {
    this.postService.getPosts(this.page).subscribe((data: Postlist) => {this.list=data.list;this.total=data.totalPages});
  }

  refresh(): void {
    window.location.reload();
}

  goToLink(url: string){
    window.open(url, "_blank");
  }

  toggle(post: Post)
  {
    this.chosenPost=post;
    this.sidenav.open();
  }

  goTo(p:number)
  {
    this.page=p;
    if (this.searchMode===false)
    this.postService.getPosts(this.page).subscribe((data:Postlist)=> {this.list=data.list;this.total=data.totalPages});
    else
    this.pageChange.emit(p);
  }

}
