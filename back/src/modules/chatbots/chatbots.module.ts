import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatbotController } from './chatbots.controller';
import { ChatbotService } from './chatbots.service';
import { Chatbot, ChatbotSchema } from './schemas/chatbot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chatbot.name, schema: ChatbotSchema }]),
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService],
})
export class ChatbotModule {}
