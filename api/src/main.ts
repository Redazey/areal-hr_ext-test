import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `../${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: +process.env.SESSION_LIVETIME,
        sameSite: 'lax',
      },
    }),
    (req, res, next) => {
      console.log('Session:', req.session);
      next();
    },
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3001);
}

bootstrap();
