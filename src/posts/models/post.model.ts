import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
    @Field(type => String)
    id: string;

    @Field()
    author: string;

    @Field()
    content: string;
}
