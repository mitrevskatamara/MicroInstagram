import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostDeleteComponent } from './posts/post-delete/post-delete.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostDeleteComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent},
      { path: 'posts/all', component: PostsComponent},
      { path: 'posts/edit', component: PostEditComponent},
      { path: 'posts/details', component: PostDetailsComponent},
      { path: 'posts/delete', component: PostDeleteComponent},
      { path: 'posts/create', component: PostCreateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
