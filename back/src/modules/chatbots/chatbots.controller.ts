import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetChatbotDto } from './dto/getchatbot.dto';
import { ChatbotService } from './chatbots.service';
import { CreateChatbotFeedbackDto } from './dto/createChatbotFeedback.dto';

@ApiTags('Chatbot')
@Controller('chatbots')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  /**
   * Chatbot 사용 만족도
   */
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Get('satisfaction')
  async getSatisfactionResults(): Promise<any> {
    return this.chatbotService.findSatisfaction();
  }

  /**
   * Chatbot 검색
   */
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Post()
  async getChatbotResponse(@Body() getChatbotDto: GetChatbotDto): Promise<any> {
    const answeredChatbot = await this.chatbotService.findAll(
      getChatbotDto.text,
    );
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
  async createChatbotFeedback(
    @Body() createChatbotDto: CreateChatbotFeedbackDto,
  ): Promise<any> {
    const createdFeedback = this.chatbotService.create(
      createChatbotDto.feedback,
    );
    return createdFeedback;
  }
}
