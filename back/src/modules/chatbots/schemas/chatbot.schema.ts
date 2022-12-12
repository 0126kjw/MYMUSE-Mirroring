import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatbotDocument = Chatbot & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Chatbot {
  @Prop()
  feedback: string;

  @Prop()
  sentiment?: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const ChatbotSchema = SchemaFactory.createForClass(Chatbot);
