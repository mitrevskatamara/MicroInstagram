
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comments } from '../comments';
import { Post } from '../../shared/post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,private router: Router,private postService: PostService,
              private fb: FormBuilder) {}


              post!: Post;
  comment: any;
  postForm!: FormGroup;
  comments: boolean = false;

  ngOnInit(): void {
    const parametar = this.route.snapshot.paramMap.get('id');

    if (parametar) {
      const id = +parametar;
      this.postService.getPost(id).subscribe((post: Post) => {
        this.post = post;
        console.log("Post: ");
        console.log(this.post);
      })
      this.postService.getCommentsId(id).subscribe((comment: any) => {
        this.comment = comment;
        console.log("Comments on post: ");
        console.log(comment);

      })
    }
  }

  onBack(): void {
    this.router.navigate(['/posts']);
  }

  edit(): void {
    this.router.navigate(['posts/' + this.post.id + '/edit']);
  }

  delete(): void {
    if (confirm(`Do you want to delete this post: ${this.post.title}?`)) {
      this.postService.deletePost(this.post.id)
      console.log("Deleted post with id: " + this.post.id + " and title: " + this.post.title);
    }
  }

  showComments(): void {
    this.comments = !this.comments;
  }
  back():void{
    if(confirm(`Do you want to go back?`)){
      this.router.navigate(['/posts']);
    }
  }





}
