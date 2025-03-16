import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../app/http/http.component';

@Component({
  selector: 'app-root',
  imports: [ NgIf, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts: any[] = [];
  newPost = { title: '', body: '' };
  editingPost: any = null;

  constructor(private apiService: ApiService) {
    this.loadPosts();
  }

  loadPosts(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 5); // Limit to first 5 posts
    });
  }

  addPost(): void {
    if (this.newPost.title && this.newPost.body) {
      this.apiService.addPost(this.newPost).subscribe((post) => {
        this.posts.unshift(post);
        this.newPost = { title: '', body: '' };
      });
    }
  }

  editPost(post: any): void {
    this.editingPost = { ...post };
  }

  updatePost(): void {
    if (this.editingPost) {
      this.apiService
        .updatePost(this.editingPost.id, this.editingPost)
        .subscribe(() => {
          const index = this.posts.findIndex(
            (p) => p.id === this.editingPost.id
          );
          if (index !== -1) {
            this.posts[index] = this.editingPost;
          }
          this.editingPost = null;
        });
    }
  }

  deletePost(id: number): void {
    this.apiService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}
