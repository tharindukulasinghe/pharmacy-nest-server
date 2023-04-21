import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PharmacyController } from './controllers/pharmacy.controller';
import { PharmacyService } from './services/pharmacy.service';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pharmacy_dev',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      logging: false,
    }),
    JwtModule.register({
      secret: 'pharmacy',
      signOptions: { expiresIn: '900s' },
    }),
  ],
  controllers: [
    AppController,
    UserController,
    AuthController,
    PharmacyController,
    OrderController,
  ],
  providers: [
    AppService,
    UserService,
    AuthService,
    PharmacyService,
    OrderService,
  ],
})
export class AppModule {}
