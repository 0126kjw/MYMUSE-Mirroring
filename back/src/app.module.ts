import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitionModule } from './modules/exhibitions/exhibitions.module';
import { MuseumModule } from './modules/museums/museums.module';
import { MapModule } from './modules/map/map.module';
import { SearchModule } from './modules/search/search.module';
import { ChatbotModule } from './modules/chatbots/chatbots.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MuseumModule,
    ExhibitionModule,
    MapModule,
    SearchModule,
    ChatbotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
