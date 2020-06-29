import { Component, OnInit } from '@angular/core';
import { Query } from '../../../query';
import {Postlist} from '../../../postlist';
import {PostService} from '../../../post.service';
import {Post} from '../../../post';

@Component({
  selector: 'importili-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: Query =new Query();
  submitted=false;
  result: Post[];
  total:number;
  noResult=false;
  page=0;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.query.keywords="";
    this.query.type="Vente";
    this.query.borne=">";
    this.query.montant=0;
    this.query.page=0;
  }

  onSubmit()
  {
    this.submitted=true;
    this.postService.searchPosts(this.query).subscribe((data : Postlist) => { this.result=data.list;this.total=data.totalPages;console.log(data); this.noResult=this.result.length==0;});
  }

  goTo(p:number)
  {
    this.query.page=p;
    this.postService.searchPosts(this.query).subscribe((data: Postlist) => {this.result=data.list;this.total=data.totalPages;});
  }


}
