import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "./post";
import { catchError, tap, map } from 'rxjs/operators';
import { Comments } from "./comments";

@Injectable({
    providedIn: 'root'
})
export class PostService{

    posturl = 'http://jsonplaceholder.typicode.com/photos';
    albumurl = 'http://jsonplaceholder.typicode.com/albums';
    userurl = 'http://jsonplaceholder.typicode.com/users';
    commentsurl = 'http://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(this.posturl).pipe(
            tap(data => console.log(JSON.stringify(data)))

        );
    }

    getPost(id: number): Observable<Post> {
        const url = `${this.posturl}/${id}`;
        return this.http.get<Post>(url);
    }

    getUser(id: number){
        const url = `${this.userurl}/${id}`;
        return this.http.get<any>(url);
    }

    getAlbum(id: number){
        const url = `${this.albumurl}/${id}`;
        return this.http.get<any>(url);
    }

    getComments(): Observable<Comments[]>{
        return this.http.get<Comments[]>(this.commentsurl).pipe(
            tap(data => console.log(JSON.stringify(data)))

        );
    }
    getCommentsId(id:number): Observable<Comments>{
        const url = `${this.commentsurl}/posts/${id}/comments`;
        return this.http.get<Comments>(url);
    }

    
    deletePost(id: number){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.posturl}/${id}`;
        return this.http.delete<Post>(url, { headers })
          .pipe(
            tap(_data => console.log('deletePost: ' + id)),
          );
    }

    
}