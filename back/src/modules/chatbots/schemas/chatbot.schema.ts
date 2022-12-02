import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatbotDocument = Chatbot & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Chatbot {
  @Prop()
  name: string;

  @Prop()
  opinion: string;

  @Prop()
  email: string;

  @Prop()
  registerDate: Date;
}

export const ChatbotSchema = SchemaFactory.createForClass(Chatbot);
