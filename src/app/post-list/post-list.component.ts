import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
}
