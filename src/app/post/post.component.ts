import { Component, Input } from '@angular/core';
import { Post } from '../post/post.model'; // Импорт модели Post

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post; // Определение входного свойства
}
