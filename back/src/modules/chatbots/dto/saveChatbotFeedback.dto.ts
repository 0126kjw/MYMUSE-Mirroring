import { IsString } from 'class-validator';

export class SaveChatbotFeedbackDto {
  /**
   * feedback
   * @example "편하게 좋보를 얻어가서 좋았습니다."
   */
  @IsString()
  feedback: string;
}
