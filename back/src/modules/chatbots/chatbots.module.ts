import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitionService } from '../exhibitions/exhibitions.service';
import {
  Exhibition,
  ExhibitionSchema,
} from '../exhibitions/schemas/exhibition.schema';
import { MuseumService } from '../museums/museums.service';
import { Museum, MuseumSchema } from '../museums/schemas/museum.schema';
import { ChatbotController } from './chatbots.controller';
import { ChatbotService } from './chatbots.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Museum.name, schema: MuseumSchema },
      { name: Exhibition.name, schema: ExhibitionSchema },
    ]),
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService, MuseumService, ExhibitionService],
})
export class ChatbotModule {}
