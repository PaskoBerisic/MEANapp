import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'first post content'},
  //   {title: 'Second Post', content: 'second post content'},
  //   {title: 'Thrid Post', content: 'third post content'},
  //   {title: 'Fourth Post', content: 'fourth post content'},
  //   {title: 'Fifth Post', content: 'fifth post content'},
  //   {title: 'Sixth Post', content: 'sixth post content'},
  // ]
  @Input() posts: Post[] = [];
}
