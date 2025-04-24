import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as process from 'node:process';
import { PassportConfig } from './modules/auth/passport.config';

dotenv.config({
  path: `../${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`,
});

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../localhost-key.pem'),
    cert: fs.readFileSync('../localhost.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors({
    origin: process.env.APP_HOST || 'https://localhost:5173',
    credentials: true,
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: +process.env.SESSION_LIVETIME,
        httpOnly: false,
        sameSite: 'none',
        secure: true,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const passportConfig = app.get(PassportConfig);
  passportConfig.setup();

  await app.listen(3001);
}

bootstrap();
