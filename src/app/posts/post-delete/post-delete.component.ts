import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  onBack(): void{
    this.router.navigate(['/posts']);
  }

}
