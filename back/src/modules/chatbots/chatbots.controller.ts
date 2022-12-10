import { Body, Controller, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ChatbotDto } from './dto/chatbot.dto';
import { ChatbotService } from './chatbots.service';
import { SaveChatbotFeedbackDto } from './dto/saveChatbotFeedback.dto';

@ApiTags('Chatbot')
@Controller('chatbots')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  /**
   * Chatbot 검색
   */
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Post()
  async getChatbotResponse(@Body() chatbotDto: ChatbotDto): Promise<any> {
    const answeredChatbot = await this.chatbotService.findAll(chatbotDto.text);
    return answeredChatbot;
  }

  /**
   * Chatbot 피드백 저장
   */
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Post('feedback')
  async saveChatbotFeedback(
    @Body() chatbotDto: SaveChatbotFeedbackDto,
  ): Promise<any> {
    const createdFeedback = await this.chatbotService.create(
      chatbotDto.feedback,
    );
    return createdFeedback;
  }
}
