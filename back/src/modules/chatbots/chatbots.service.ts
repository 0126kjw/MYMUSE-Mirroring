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
    const displayName = result.intent.displayName;
    const fields = result.parameters.fields;
    let fulfillmentText = result.fulfillmentText.trim();
    console.log('Detected intent');
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    // dialogflow에서 평일을 월~일로 인식하기 때문에 강제로 2일 줄여주는 로직 구성
    const editWeekdayText = async (fulfillmentText: string) => {
      const endDate = fulfillmentText.slice(11, 21);
      const endDateArr = endDate.split('-');
      const year = Number.parseInt(endDateArr[0]);
      const month = Number.parseInt(endDateArr[1]);
      const day = Number.parseInt(endDateArr[2]);
      const newEndDate = new Date(year, month, day - 1)
        .toISOString()
        .slice(0, 10);

      fulfillmentText = fulfillmentText.replace(endDate, newEndDate);

      return fulfillmentText;
    };

    if (queryText.indexOf('평일') >= 0) {
      fulfillmentText = await editWeekdayText(fulfillmentText);
    }

    if (result.intent) {
      let intendedAnswer = await this.getIntentedAnswer(
        fields,
        displayName,
        queryText,
      );
      if (intendedAnswer) {
        intendedAnswer = { intendedAnswer, displayName, fulfillmentText };
      } else {
        fulfillmentText = '데이터에 없는 정보 입니다.';
        intendedAnswer = { displayName, fulfillmentText };
      }

      return intendedAnswer;
    } else {
      return { errorMessage: 'No intent matched.' };
    }
  }

  async getIntentedAnswer(
    fields: any,
    displayName: string,
    queryText: string,
  ): Promise<any> {
    const facilityName = fields?.facilityName?.stringValue;
    console.log(facilityName);
    const category = fields?.facilityCategory?.stringValue;
    let address = null;
    if (fields?.location?.structValue?.fields?.['subadmin-area']) {
      address =
        fields?.location?.structValue?.fields?.['subadmin-area']?.stringValue;
    } else if (fields?.location?.structValue?.fields?.['street-address']) {
      address =
        fields?.location?.structValue?.fields?.['street-address']?.stringValue;
    }

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
          'name mon tue wed thu fri sat sun offday',
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
          address,
          category,
          'website',
        );

      case 'exhibitionDateSearch':
        const endDate = await this.SearchSpecificDate(fields, queryText);
        const dateSearch = await this.exhibitionService.findRightItems(
          endDate,
          'title period href',
        );

        return dateSearch;
    }
  }

  async SearchSpecificDate(fields: any, queryText: string): Promise<any> {
    const dateTime = fields['date-time'];

    if (dateTime?.structValue?.fields) {
      const period = dateTime.structValue.fields;
      let endDate = null;

      if (queryText.indexOf('평일') >= 0) {
        endDate = queryText.slice(0, 10).split('-');
        endDate[2] -= 2;
        endDate = endDate.join('-');
        endDate = new Date(`${endDate}T23:59:59+00:00`);
      } else {
        endDate = new Date(period?.endDate?.stringValue);
      }
      const date = new Date('2001-11-23');

      return endDate;
    } else {
      const period = dateTime.stringValue;
      const date = period.slice(0, 10);
      const endDate = new Date(`${date}T23:59:59+00:00`);

      return endDate;
    }
  }
}
