import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { NewPostInput } from "./dto/new-post.input";
import { PostArgs } from "./dto/post.args";
import { Post } from "./models/post.model";
import { PostsService } from "./posts.service";

@Resolver(of => Post)
export class PostsResolver {
    constructor(private postsService: PostsService) { }

    @Query(returns => Post)
    post(@Args("id") id: string): Observable<Post> {
        return this.postsService.getPost(id);
    }

    @Query(returns => [Post])
    posts(@Args() postArgs: PostArgs) {
        return this.postsService.getPosts(postArgs);
    }

    @Mutation(returns => Post)
    createPost(@Args("newPostData") postInput: NewPostInput) {
        return this.postsService.createPost(postInput);
    }
}
