/*import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];

  constructor() { }

  addPost(post: Post) {
    this.posts.push(post);
  }

  getPosts(): Post[] {
    return this.posts;
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
 */