import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.dev";
import { Post } from "../models/post";

@Injectable(
  {
    providedIn: "root"
  }
)
export class PostsService {
  readonly API = `${environment.API}/posts`;

  constructor(private htpp: HttpClient) { }

  getAllPosts() {
    return this.htpp.get<Post[]>(`${this.API}`);
  }

  getPostById(id: string) {
    return this.htpp.get<Post>(`${this.API}/${id}`);
  }

  createPost(post: Post) {
    return this.htpp.post<Post>(`${this.API}`, post);
  }

  updatePost(post: Post) {
    return this.htpp.put<Post>(`${this.API}/${post.id}`, post);
  }

  deletePost(id: string) {
    return this.htpp.delete<Post>(`${this.API}/${id}`);
  }
}
