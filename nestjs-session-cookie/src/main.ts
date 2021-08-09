import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import ExpressSession from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true,
    }),
  );

  app.use(
    ExpressSession({
      secret: 'i-wanna-work-with-inflearn',
      saveUninitialized: true,
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 10000,
        // secure: true,  // todo: https
      },
      // store: new RedisStore()  // todo: redis
    }),
  );

  await app.listen(3000);
}
bootstrap();
