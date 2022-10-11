import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewPostInput {
    @Field()
    author: string;

    @Field()
    content: string;
}
