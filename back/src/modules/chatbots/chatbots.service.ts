import { Injectable } from '@nestjs/common';
import dialogflow from '@google-cloud/dialogflow';
import { ExhibitionService } from '../exhibitions/exhibitions.service';
import { MuseumService } from '../museums/museums.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chatbot } from './schemas/chatbot.schema';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectModel(Chatbot.name)
    private readonly chatbotModel: Model<Chatbot>,
    private readonly exhibitionService: ExhibitionService,
    private readonly museumService: MuseumService,
  ) {}

  async create(feedback: string): Promise<any> {
    return await this.chatbotModel.create(feedback);
  }

  async SearchSpecificDate(fields: any): Promise<any> {
    let startDate = null;
    let endDate = null;
    console.log(fields);
    if (fields['date-time']?.structValue?.fields) {
      if ('오늘') {
      }
      const period = fields['date-time']?.structValue?.fields;

      startDate = new Date(period?.startDate?.stringValue);
      endDate = new Date(period?.endDate?.stringValue);

      return { startDate, endDate };
    } else {
      const period = fields['date-time']?.stringValue;
      const date = period.slice(0, 10);

      startDate = new Date(`${date}T00:00:00+09:00`);
      endDate = new Date(`${date}T23:59:59+09:00`);

      console.log(startDate);
      console.log(endDate);

      return { startDate, endDate };
    }
  }

  async getIntentedAnswer(result: any): Promise<any> {
    const fields = result.parameters.fields;
    const displayName = result.intent.displayName;
    const facilityName = fields?.facilityName?.stringValue;
    const category = fields?.facilityCategory?.stringValue;
    const borough =
      fields?.location?.structValue?.fields?.['subadmin-area']?.stringValue;

    switch (displayName) {
      case 'facilityContact':
        const contactInfo = await this.museumService.findOne(
          facilityName,
          'contactInfo',
        );

        return contactInfo;

      case 'facilityAddress':
        const addressInfo = await this.museumService.findOne(
          facilityName,
          'newAddress oldAddress',
        );

        return addressInfo;

      case 'facilityOpeningHours':
        const openingHours = await this.museumService.findOne(
          facilityName,
          'mon tue wed thu fri sat sun offday',
        );

        return openingHours;

      case 'facilityTicket':
        return await this.museumService.findOne(
          facilityName,
          'isFree adultFee youthFee childFee',
        );

      case 'facilityOthers':
        return await this.museumService.findOne(facilityName, 'website');

      case 'facilityAreaSearch':
        return await this.museumService.findRightItems(
          borough,
          category,
          'website',
        );

      case 'exhibitionDateSearch':
        const { startDate, endDate } = await this.SearchSpecificDate(fields);
        const dateSearch = await this.exhibitionService.findRightItems(
          startDate,
          endDate,
          'website period',
        );

        return dateSearch;
      case 'exhibitionTitle':
      // const exhibitionTitle = await this.exhibitionService.findOne();
    }
  }

  async findAll(text: string): Promise<any> {
    const sessionId = process.env.DIALOGFLOW_SESSION_ID;
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
    const result = responses[0].queryResult;
    const queryText = result.queryText;
    let fulfillmentText = result.fulfillmentText;
    console.log('Detected intent');
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    if (queryText.indexOf('평일') >= 0) {
      const endDate = fulfillmentText.slice(11, 21);
      const endDateArr = endDate.split('-');
      const year = Number.parseInt(endDateArr[0]);
      const month = Number.parseInt(endDateArr[1]);
      const day = Number.parseInt(endDateArr[2]);
      const newEndDate = new Date(year, month, day - 1)
        .toISOString()
        .slice(0, 10);

      fulfillmentText = fulfillmentText.replace(endDate, newEndDate);
    }

    if (result.intent) {
      const intetedAnswer = await this.getIntentedAnswer(result);

      intetedAnswer.displayName = result.intent.displayName;
      intetedAnswer.fulfillmentText = fulfillmentText;
      console.log(intetedAnswer);
      return intetedAnswer;
    } else {
      const message = { errorMessage: 'No intent matched.' };

      return message;
    }
  }
}
