import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatbotDocument = Chatbot & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Chatbot {
  @Prop()
  feedback: string;

  @Prop()
  sentiment: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ChatbotSchema = SchemaFactory.createForClass(Chatbot);
