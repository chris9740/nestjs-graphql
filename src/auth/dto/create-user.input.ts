import { Field, InputType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field(type => String)
    @Min(3)
    @Max(16)
    username: string;

    @Field(type => String)
    @Min(6)
    @Max(72)
    password: string;
}
