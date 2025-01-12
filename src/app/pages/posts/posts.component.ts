import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from '../../shared/services/posts.service';
import { Post } from './../../shared/models/post';

@Component({
  selector: 'posts-component',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private _service: PostsService) { }

  ngOnInit(): void {
    this._service.getAllPosts().subscribe(data => this.posts = data);
    // console.log(this.posts);
  }
}

