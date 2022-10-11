import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { CreateUserInput } from "./dto/create-user.input";
import { User } from "./models/user.model";

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Mutation(returns => User)
    register(@Args("accountData") userData: CreateUserInput) {
        const user = this.authService.register(userData);

        return user;
    }
}
