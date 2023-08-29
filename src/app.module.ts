import { Module } from '@nestjs/common';
import { ChampsModule } from './champ/champ.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      // conexion a mySql con typeOrm
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', //Contraseña de su DB
      database: 'lolbuild',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true,
    }),
    ChampsModule,
    UserModule,
  ],
})
export class AppModule {}
