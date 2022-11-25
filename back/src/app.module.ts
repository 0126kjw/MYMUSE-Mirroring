import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitionModule } from './exhibitions/exhibitions.module';
import { MuseumModule } from './museums/museums.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MuseumModule,
    ExhibitionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
