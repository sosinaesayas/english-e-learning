import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
    );
    app.setGlobalPrefix('api/v1');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/v1/health (GET) reports ok', () => {
    return request(app.getHttpServer())
      .get('/api/v1/health')
      .expect(200)
      .expect(({ body }) => {
        expect(body.ok).toBe(true);
      });
  });

  it('logs in the seeded admin and returns their session on /auth/me', async () => {
    const agent = request.agent(app.getHttpServer());

    await agent
      .post('/api/v1/auth/login')
      .send({ email: 'admin@englishacademy.local', password: 'Admin123!' })
      .expect(200);

    const res = await agent.get('/api/v1/auth/me').expect(200);
    expect(res.body.email).toBe('admin@englishacademy.local');
    expect(res.body.role).toBe('admin');
  });
});
