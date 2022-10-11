import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { join } from "path";
import { GqlAuthGuard } from "./auth.guard";
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        GraphQLModule.forRoot<MercuriusDriverConfig>({
            driver: MercuriusDriver,
            graphiql: true,
            autoSchemaFile: join(process.cwd(), "src/schema.gql")
        }),
        PostsModule,
        AuthModule
    ],
    providers: [{
        provide: APP_GUARD,
        useClass: GqlAuthGuard
    }]
})
export class AppModule { }
