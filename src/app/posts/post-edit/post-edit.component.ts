import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post!: Post;
  postForm!: FormGroup;
  

  constructor(private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,
    private postService: PostService) { }

  ngOnInit(): void {

    const parametar = this.route.snapshot.paramMap.get('id');
    if(parametar){
      const id = +parametar;
      this.postService.getPost(id).subscribe((post:Post)=>{
        this.post = post;
        console.log("Post for editing: ");
        console.log(post);

      }
      );
    
   
      this.postForm = this.fb.group({
        postTitle: ['', [Validators.required]],
        postAlbumId: ['', [Validators.required]],
        postUrl: ['', [Validators.required]],
        postthumbnailUrl: ['', [Validators.required]]
      });
    
    }

  }
  

  onBack(): void{
    this.router.navigate(['/posts']);
  }

  savePost(): void {
   
    if(confirm(`Do you want to save new post?`)){
      console.log(this.postForm);
    
      this.postService.getPosts().subscribe(data=>{
        let post: Post = this.postForm.value;
        this.postService.savePost(post);
        console.log("Edited post: ");
        console.log(post);
        console.log("Post id: ");
        console.log(post.id);
      })
    }
  }

}
