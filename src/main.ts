import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication, } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({
        logger: true
    }));

    app.useGlobalPipes(new ValidationPipe());

    app.use((req, res, next) => {
        console.log(req);
        next();
    });

    await app.listen(3000);
}

bootstrap();
