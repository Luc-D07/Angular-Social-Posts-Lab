import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'This is pretty neat',
      thought:
        "I'm using Angular to create a small web application. This might not seem like a big feat but after being in bootcamp for only 5 weeks, it feels pretty awesome",
    },
    {
      title: "I can't wait for snow!",
      thought: "It's too warm for November :/",
    },
    {
      title: 'Almost there!',
      thought: 'Just made it to week 5 of bootcamp! Hooray!',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };

  addPost = (post: Post): void => {
    this.posts.unshift(post);
  };
}
