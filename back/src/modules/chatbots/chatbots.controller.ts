import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ChatbotDto } from './dto/chatbot.dto';
import { ChatbotService } from './chatbots.service';

@ApiTags('Chatbot')
@Controller('chatbots')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @ApiOperation({ summary: 'Chatbot 검색' })
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Post()
  async getChatbotResponse(@Body() chatbotDto: ChatbotDto): Promise<any> {
    const answeredChatbot = await this.chatbotService.findAll(chatbotDto.text);
    return answeredChatbot;
  }
}
