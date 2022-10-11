import { Injectable, NotFoundException } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { NewPostInput } from "./dto/new-post.input";
import { PostArgs } from "./dto/post.args";
import { Post } from "./models/post.model";

@Injectable()
export class PostsService {
    private posts: Post[] = [];

    private genId() {
        return Math.random().toString().substring(2);
    }

    public getPost(id: string): Observable<Post> {
        const post = this.posts.find((post) => post.id === id);

        if (!post) {
            throw new NotFoundException("Post not found");
        }

        return of(post);
    }

    public getPosts(filter: PostArgs): Observable<Post[]> {
        const posts = this.posts;

        if (filter.limit) {
            posts.splice(filter.limit);
        }

        return of(posts);
    }

    public createPost(postInput: NewPostInput): Observable<Post> {
        const post: Post = {
            id: this.genId(),
            author: postInput.author,
            content: postInput.content
        };

        this.posts.push(post);

        return of(post);
    }
}
