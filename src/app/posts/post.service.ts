import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../shared/post";
import { catchError, tap, map } from 'rxjs/operators';
import { Comments } from "./comments";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    posturl = 'http://jsonplaceholder.typicode.com/photos';
    albumurl = 'http://jsonplaceholder.typicode.com/albums';
    userurl = 'http://jsonplaceholder.typicode.com/users';
    url = 'http://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.posturl).pipe(
            //tap(data => console.log(JSON.stringify(data)))

        );
    }

    getPost(id: number): Observable<Post> {
        const url = `${this.posturl}/${id}`;
        return this.http.get<Post>(url);
    }

    getUser(id: number) {
        const url = `${this.userurl}/${id}`;
        return this.http.get<any>(url);
    }

    getAlbum(id: number) {
        const url = `${this.albumurl}/${id}`;
        return this.http.get<any>(url);
    }

    getComments(): Observable<Comments[]> {
        return this.http.get<Comments[]>(this.url).pipe(
            tap(data => console.log(JSON.stringify(data)))

        );
    }
    getCommentsId(id: number): Observable<Comments> {
        const url = `${this.url}/posts/${id}/comments`;
        return this.http.get<Comments>(url);
    }


    deletePost(id: number) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.url}/posts/${id}`;
        return this.http.delete<Post>(url, { headers });

    }

    savePost(post: any) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.url}/posts`;
        return this.http.post<Post>(this.url, post, { headers });
    }

    updatePost(post: Post): Observable<Post> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.url}/posts/${post.id}`;
        return this.http.put<Post>(url, post, { headers })
            .pipe(
                tap(() => console.log('Updated post id: ' + post.id)),
                // Return the product on an update
                map(() => post),
            );
    }
    private initializePost(): Post {
        // Return an initialized object
        return {
            albumId: 0,
            id: 0,
            title: '',
            url: '',
            thumbnailUrl: ''

        };
    }

}