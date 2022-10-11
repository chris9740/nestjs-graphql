import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import * as bcrypt from "bcrypt";
import { from, Observable } from "rxjs";
import { User } from "./models/user.model";

@Injectable()
export class AuthService {
    private users = [];

    public register(userData: CreateUserInput): Observable<User> {
        const username = userData.username.trim();
        const password = userData.password.trim();

        const usernameExists = !!this.users.find((user) => user.username === username);

        if (usernameExists) {
            throw new BadRequestException("Username is already taken");
        }

        return new Observable((subscriber) => {
            from(bcrypt.hash(password, 12)).subscribe((hash) => {
                const user: User = {
                    id: Math.random().toString().substring(2),
                    username: username,
                    password: hash
                };

                this.users.push(user);

                subscriber.next(user);
                subscriber.complete();
            });
        });
    }
}
