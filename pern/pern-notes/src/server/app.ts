import { injectable, container } from 'tsyringe';
import { AppModule } from './modules/app.module';
import { Config } from './config/env.config';
import express, { type Router } from 'express';
import ViteExpress from 'vite-express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

@injectable()
class App extends Config {
  public app: express.Express;
  private readonly port: number;

  constructor() {
    super();
    this.app = express();
    this.port = this.getNumberEnv('PORT') ?? 5000;

    container.resolve<AppModule>(AppModule);
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public listen(): void {
    void ViteExpress.listen(this.app, this.port, () => {
      console.log(`Listening on port http://localhost:${this.port}`);
    });
  }

  private initializeMiddlewares(): void {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5000',
      // Add your current Docker host dynamically if needed
      'http://ip172-18-0-21-d0c3qm8l2o9000fgd1k0-3000.direct.labs.play-with-docker.com',
      'http://ip172-18-0-21-d0c3qm8l2o9000fgd1k0-5000.direct.labs.play-with-docker.com',
    ];

    this.app.use(cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true
    }));

    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    const authRouter = container.resolve<Router>('AuthRoute');
    const userRouter = container.resolve<Router>('UserRoute');
    const noteRouter = container.resolve<Router>('NoteRoute');

    this.app.use('/api/auth', authRouter);
    this.app.use('/api/users', userRouter);
    this.app.use('/api/notes', noteRouter);
  }
}

export default App;
