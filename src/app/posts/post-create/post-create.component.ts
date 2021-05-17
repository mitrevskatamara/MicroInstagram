import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newId!: number;
  postForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private postService: PostService) {}
  post!: Post;
  ngOnInit(): void {
    this.postForm = this.fb.group({
      postTitle: ['', [Validators.required]],
      postAlbumId: ['', [Validators.required]],
      postUrl: ['', [Validators.required]],
      postthumbnailUrl: ['', [Validators.required]]
    });

  }

  save(): void {

    if (confirm(`Do you want to save new post?`)) {
    
      this.postService.getPosts().subscribe(data => {
        this.newId = data.length+1;
        let post: Post = this.postForm.value;
        post.id = this.newId;
        this.postService.savePost(post);
        console.log("New post: ");
        console.log(post);
      })
      
    }
    this.router.navigate(['/posts']);

  }

  cancel(): void {
    if (confirm(`Do you want to cancel and go back?`)) {
      this.router.navigate(['/posts']);
    }
  }

}
