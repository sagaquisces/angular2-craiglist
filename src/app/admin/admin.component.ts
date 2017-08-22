import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})

export class AdminComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, content: string, price: string, image: string, category: string) {
    console.log("price is " + typeof price + "when received from input");
    const newPost: Post = new Post(title, content, parseInt(price), image, category);
    console.log(newPost);
    console.log("Price is " + typeof newPost.price + " after creation as object value");
    this.postService.addPost(newPost);
  }

}
