import { IsString } from 'class-validator';

export class CreateChatbotFeedbackDto {
  /**
   * feedback
   * @example "편하게 좋은 정보를 얻어가서 좋았습니다."
   */
  @IsString()
  feedback: string;
}
