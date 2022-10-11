import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@ArgsType()
export class PostArgs {
    @Field(type => Int)
    @Min(0, { message: "Must be more than 0" })
    @Max(50, { message: "Must be less than 50" })
    limit: number = 5;
}
