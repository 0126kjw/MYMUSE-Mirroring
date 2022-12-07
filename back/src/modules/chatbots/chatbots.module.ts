import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitionModule } from '../exhibitions/exhibitions.module';
import {
  Exhibition,
  ExhibitionSchema,
} from '../exhibitions/schemas/exhibition.schema';
import { MuseumModule } from '../museums/museums.module';
import { Museum, MuseumSchema } from '../museums/schemas/museum.schema';
import { ChatbotController } from './chatbots.controller';
import { ChatbotService } from './chatbots.service';

@Module({
  imports: [
    MuseumModule,
    ExhibitionModule,
    MongooseModule.forFeature([
      { name: Museum.name, schema: MuseumSchema },
      { name: Exhibition.name, schema: ExhibitionSchema },
    ]),
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService],
})
export class ChatbotModule {}
