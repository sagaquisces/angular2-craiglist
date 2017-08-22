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

  getPostById(postId: string){
    return this.database.object('posts/'+postId);
  }

  updatePost(localUpdatedPost){
    var albumEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    albumEntryInFirebase.update({title: localUpdatedPost.title,
                                content: localUpdatedPost.content,
                                price: localUpdatedPost.price,
                                category: localUpdatedPost.category,
                                image: localUpdatedPost.image});
  }

  deletePost(localPostToDelete){
    let postEntryInFirebase = this.getPostById(localPostToDelete.$key);
    postEntryInFirebase.remove();
  }

}
