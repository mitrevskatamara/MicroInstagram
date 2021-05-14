import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  
  post: any;

  postForm!: FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder) { 
  
    
  }
  
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
  savePost(): void {
    console.log(this.postForm);
    console.log('New post: ' + JSON.stringify(this.postForm?.value));
  }

}
