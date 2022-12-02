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
  // private readonly projectId = process.env.GOOGLE_PROJECT_ID;
  // private readonly sessionId = process.env.DIALOGFLOW_SESSION_ID;
  // private readonly languageCode = process.env.DIALOGFLOW_LANGUAGE_CODE;
  // private readonly sessionClient = new dialogflow.SessionsClient();
  // private readonly sessionPath = this.sessionClient.projectAgentSessionPath(
  //   this.projectId,
  //   this.sessionId,
  // );

  @ApiOperation({ summary: 'Chatbot 검색' })
  @ApiOkResponse({
    description: '검색한 정보에 맞게 데이터를 반환합니다.',
  })
  @ApiNotFoundResponse({ description: 'NotFound' })
  @Post()
  async getChatbotText(@Body() chatbotDto: ChatbotDto): Promise<any> {
    console.log(chatbotDto);
    const chatbotResult = await this.chatbotService.findAll(chatbotDto.text);
    return chatbotResult;
  }
}
