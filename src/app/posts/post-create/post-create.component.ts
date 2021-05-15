import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../shared/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  
  //post: any;
  newId!: number;
  postForm!: FormGroup;
  postTitle1!: FormControl;
  postAlbumId1!: FormControl;
  postUrl1!: FormControl;
  postthumbnailUrl1!: FormControl;
  constructor(private router: Router,private fb: FormBuilder, private postService: PostService) { 
  
    
  }
  post!: Post;
  ngOnInit(): void {
     this.postForm = this.fb.group({
      postTitle: ['', [Validators.required]],
      postAlbumId: ['', [Validators.required]],
      postUrl: ['', [Validators.required]],
      postthumbnailUrl: ['', [Validators.required]]
    });
    
  }

  onBack(): void{
    this.router.navigate(['/posts']);
  }
  save(): void {
    
    if(confirm(`Do you want to save new post`)){
      console.log(this.postForm);
    
      this.postService.getPosts().subscribe(data=>{
        this.newId = Math.max.apply(Math, data.map(obj => obj.id));
        let post: Post = this.postForm.value;
        post.id = this.newId;
        this.postService.savePost(post);
        console.log("New post: ");
        console.log(post);
      })
    }
    
  }

  cancel(): void{
    if (confirm(`Do you want to cancel and go back?`)) {
      this.router.navigate(['/posts']);
    }
  }

}
