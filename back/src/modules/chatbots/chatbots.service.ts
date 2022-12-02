import { Injectable } from '@nestjs/common';
import dialogflow from '@google-cloud/dialogflow';
import * as uuid from 'uuid';

@Injectable()
export class ChatbotService {
  async findAll(text: string): Promise<any> {
    const sessionId = uuid.v4();
    const projectId = process.env.GOOGLE_PROJECT_ID;

    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId,
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log('  No intent matched.');
    }

    return result;
  }
}
