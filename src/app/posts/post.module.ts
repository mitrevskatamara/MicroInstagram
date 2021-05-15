import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostsComponent},
      { path: 'posts/:id/edit', component: PostEditComponent},
      { path: 'posts/:id/details', component: PostDetailsComponent},
      { path: 'posts/create', component: PostCreateComponent}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PostModule { }
