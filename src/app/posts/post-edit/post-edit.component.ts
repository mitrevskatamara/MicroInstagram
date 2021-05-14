import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post | undefined;
  postForm!: FormGroup;

  //private sub: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,
    private postService: PostService) { }

  ngOnInit(): void {

    this.postForm = this.fb.group({
      postTitle: ['', [Validators.required]],
      postAlbumId: ['', [Validators.required]],
      postUrl: ['', [Validators.required]],
      postthumbnailUrl: ['', [Validators.required]],

    });

    const parametar = this.route.snapshot.paramMap.get('id');
    if(parametar){
      const id = +parametar;
        this.postService.getPost(id);
    }
  }


  onBack(): void{
    this.router.navigate(['/posts']);
  }
  savePost(): void {
    console.log(this.postForm);
    console.log('New post: ' + JSON.stringify(this.postForm.value));
  }

}
