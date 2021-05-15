import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post!: Post;

  postForm = new FormGroup({
    postTitle: new FormControl('', Validators.required),
    postAlbumId: new FormControl('', Validators.required),
    postUrl: new FormControl('', Validators.required),
    postthumbnailUrl: new FormControl('', Validators.required)

  });

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private postService: PostService,) { }

  ngOnInit(): void {

    const parametar = this.route.snapshot.paramMap.get('id');
    if (parametar) {
      const id = +parametar;
      this.postService.getPost(id).subscribe((p: Post) => {
        this.post = p;
        console.log("Post for editing: ");
        console.log(p);

        this.displayPost(p);

      });
    }

  }

  displayPost(post: Post): void {
    if (this.postForm) {
      this.postForm.reset();
    }
    this.post = post;

    this.postForm.patchValue({
      postTitle: this.post.title,
      postAlbumId: this.post.albumId,
      postUrl: this.post.url,
      postthumbnailUrl: this.post.thumbnailUrl
    });

  }

  savePost(): void {
    if (this.postForm.valid) {
      if (this.postForm.dirty) {
        const p = { ...this.post, ...this.postForm.value };
        this.postService.updatePost(p)
          .subscribe({
            next: () => this.onSaveComplete(),

          });

      } else {
        this.onSaveComplete();
      }
    }
  }

  onSaveComplete(): void {
    this.postForm.reset();
    this.router.navigate(['/posts']);
  }

  cancel(): void {
    if (confirm(`Do you want to go back?`)) {
      this.router.navigate(['/posts']);
    }
  }

}
