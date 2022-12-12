import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class GetChatbotDto {
  /**
   * text
   * @example "경운박물관 전화번호 알려줘"
   */
  @IsString()
  @Type(() => String)
  text: string;
}
