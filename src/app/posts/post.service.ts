import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "./post";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService{
    private posturl = 'http://jsonplaceholder.typicode.com/photos';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(this.posturl).pipe(
            tap(data => console.log(JSON.stringify(data)))

        );
    }

    getPost(id: number): Observable<Post> {
        const url = `${this.posturl}/${id}`;
        return this.http.get<Post>(url).pipe(
            tap(data=>console.log(JSON.stringify(data)))
        );
    }
}