import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../shared/post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
   posts: Post[] = [];

   @Input() post: any;
   constructor(private postService: PostService, private router: Router) { }

   ngOnInit(): void {
     this.postService.getPosts().subscribe({
       next: posts =>{
         this.posts = posts;
       }
     });
     
   }

   
     

   
   
}
