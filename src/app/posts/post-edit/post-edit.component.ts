import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onBack(): void{
    this.router.navigate(['/posts']);
  }

}
