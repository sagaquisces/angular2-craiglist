import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostById(postId: number){
    // for (let i = 0; i <= POSTS.length - 1; i++) {
    //   if (POSTS[i].id === postId) {
    //     return POSTS[i];
    //   }
    // }
  }

}
