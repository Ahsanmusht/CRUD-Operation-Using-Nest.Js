import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './book/student.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:['.local.env']
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (ConfigService : ConfigService) => ({uri : ConfigService.get('MONGO_URI')}),
      inject:[ConfigService]
    }),
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
