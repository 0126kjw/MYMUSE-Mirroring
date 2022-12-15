import { Injectable } from '@nestjs/common';
import dialogflow from '@google-cloud/dialogflow';
import { ExhibitionService } from '../exhibitions/exhibitions.service';
import { MuseumService } from '../museums/museums.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chatbot } from './schemas/chatbot.schema';
import { format, subDays, add } from 'date-fns';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectModel(Chatbot.name)
    private readonly chatbotModel: Model<Chatbot>,
    private readonly exhibitionService: ExhibitionService,
    private readonly museumService: MuseumService,
  ) {}

  async create(feedback: string): Promise<void> {
    console.log(feedback);
    // const spawn = require('child_process').spawn;
    // const result = spawn('python', [
    //   './src/modules/chatbots/python/emotePredict.py',
    //   feedback,
    // ]);

    // result.stdout.on('data', function (data: { toString: () => any }) {
    //   console.log('성공');
    //   console.log(data.toString());
    // });

    // result.stderr.on('data', function (data: { toString: () => any }) {
    //   console.log('오류');
    //   console.log(data.toString());
    // });

    this.chatbotModel.create({ feedback, sentiment: -1 });
  }

  async findSatisfaction(): Promise<any> {
    const sentiment = await this.chatbotModel
      .find({ sentiment: { $gte: 0 } }, 'sentiment')
      .lean();

    const goodFeelings = sentiment.filter((data) => {
      console.log(data.sentiment);
      return data.sentiment === 1;
    });

    const goodFeeling = (goodFeelings.length / sentiment.length)
      .toFixed(2)
      .slice(-2);
    const badFeeling = (1 - goodFeelings.length / sentiment.length)
      .toFixed(2)
      .slice(-2);

    return {
      goodFeeling,
      badFeeling,
    };
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
    const queryText = result?.queryText;
    const displayName = result?.intent?.displayName;
    const fields = result?.parameters?.fields;
    let fulfillmentText = result?.fulfillmentText.trim();
    console.log('Detected intent');
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    // dialogflow에서 평일을 월~일로 인식하기 때문에 강제로 2일 줄여주는 로직 구성
    const editWeekdayText = async (fulfillmentText: string) => {
      const endDate = fulfillmentText.slice(11, 21);
      const [year, month, day] = endDate.split('-');
      const date = new Date(
        Number.parseInt(year),
        Number.parseInt(month),
        Number.parseInt(day),
      );
      const newEndDate = format(subDays(date, 2), 'yyyy-MM-dd');

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

      if (fields?.facilityName?.stringValue === '') {
        fulfillmentText = '데이터에 없는 정보 입니다.';
        intendedAnswer = { displayName, fulfillmentText };
      } else if (intendedAnswer) {
        intendedAnswer = { intendedAnswer, displayName, fulfillmentText };
      } else {
        intendedAnswer = { displayName, fulfillmentText };
      }

      return intendedAnswer;
    } else {
      throw new Error('Chatbot intent error');
    }
  }

  async getIntentedAnswer(
    fields: any,
    displayName: string,
    queryText: string,
  ): Promise<any> {
    const facilityName = fields?.facilityName?.stringValue;
    const area = fields?.location?.structValue?.fields;
    const category = fields?.facilityCategory?.stringValue;
    let address = null;

    if (area?.['subadmin-area']) {
      address = area?.['subadmin-area']?.stringValue;
    } else if (area?.['street-address']) {
      address = area?.['street-address']?.stringValue;
    }

    switch (displayName) {
      case 'facilityContact':
        return this.museumService.findOne(facilityName, 'name contactInfo');

      case 'facilityAddress':
        return this.museumService.findOne(
          facilityName,
          'name newAddress oldAddress',
        );

      case 'facilityOpeningHours':
        return this.museumService.findOne(
          facilityName,
          'name mon tue wed thu fri sat sun offday',
        );

      case 'facilityTicket':
        return this.museumService.findOne(
          facilityName,
          'name isFree adultFee youthFee childFee feeUrl',
        );

      case 'facilityOthers':
        return this.museumService.findOne(facilityName, 'name website');

      case 'facilityAreaSearch':
        return this.museumService.findRightItems(
          address,
          category,
          'id name website',
        );

      case 'exhibitionDateSearch':
        const endDate = await this.searchSpecificDate(fields, queryText);

        return this.exhibitionService.findRightItems(endDate, 'title href');
    }
  }

  async searchSpecificDate(fields: any, queryText: string): Promise<any> {
    const dateTime = fields['date-time'];
    let date = null;
    let endDate = null;

    if (dateTime?.structValue?.fields) {
      const period = dateTime.structValue.fields;

      if (queryText.indexOf('평일') >= 0) {
        date = new Date(period?.endDate?.stringValue);
        endDate = format(subDays(date, 2), 'yyyy-MM-dd HH:mm:ss.SSS');

        return new Date(endDate);
      } else {
        return new Date(period?.endDate?.stringValue);
      }
    } else {
      date = new Date(dateTime.stringValue);
      endDate = format(
        add(date, {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
        'yyyy-MM-dd HH:mm:ss.SSS',
      );

      return new Date(endDate);
    }
  }
}
