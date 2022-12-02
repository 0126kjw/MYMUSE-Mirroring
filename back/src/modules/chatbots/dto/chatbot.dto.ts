import { IsString } from 'class-validator';

export class ChatbotDto {
  /**
   * text
   * @example "경운"
   */
  @IsString()
  text: string;
}
