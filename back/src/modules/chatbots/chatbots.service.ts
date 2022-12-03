import { Injectable } from '@nestjs/common';
import dialogflow from '@google-cloud/dialogflow';
import { InjectModel } from '@nestjs/mongoose';
import { Exhibition } from '../exhibitions/schemas/exhibition.schema';
import { Museum } from '../museums/schemas/museum.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectModel(Exhibition.name)
    private readonly exhibitionModel: Model<Exhibition>,
    @InjectModel(Museum.name)
    private readonly museumModel: Model<Museum>,
  ) {}

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
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    const museumFindOne = async (name: string, reponseInfo: string) => {
      return await this.museumModel.findOne({ name }, reponseInfo).lean();
    };
    const facilityAreaSearch = async (
      borough: string,
      category: string,
      reponseInfo: string,
    ) => {
      return await this.museumModel
        .find({ oldAddress: { $regex: borough }, category }, reponseInfo)
        .lean();
    };
    // const exhibitionDateSearch = async (name: string, reponseInfo: string) => {
    //   return await this.exhibitionModel.find({ name }, reponseInfo).lean();
    // };

    if (result.intent) {
      // console.log('인텐트 구간');
      let condition = '';

      if (!(result.intent !== 'facilityAreaSerch')) {
        condition = result.parameters.fields.facilityName.stringValue;
      }

      switch (result.intent.displayName) {
        case 'facilityContact':
          const phoneNum = await museumFindOne(condition, 'contactInfo');

          return phoneNum;

        case 'facilityAreaSearch':
          //findAll 조건걸쳐서
          const borough =
            result.parameters.fields.location.listValue.values[0].structValue
              .fields['subadmin-area'].stringValue;
          const category =
            result.parameters.fields.facilityCategory.stringValue;
          const addressUrl = await facilityAreaSearch(
            borough,
            category,
            'name oldAddress website',
          );

          return addressUrl;

        case 'facilityAddress':
          const address = await museumFindOne(
            condition,
            'newAddress oldAddress',
          );

          return address;

        case 'facilityOpeningHours':
          const previewTime = await museumFindOne(
            condition,
            'mon tue wed thu fri sat sun offday',
          );

          return previewTime;

        case 'facilityTicket':
          const Fee = await museumFindOne(
            condition,
            'isFree adultFee youthFee childFee',
          );

          return Fee;

        case 'facilityOthers':
          const website = await museumFindOne(condition, 'website');

          return website;

        // case 'exhibitionDateSearch':
        //   const exhibitionDate = await exhibitionDateSearch(
        //     condition,
        //     'period',
        //   );

        //   return exhibitionDate;
      }
    } else {
      const message = { errorMessage: 'No intent matched.' };

      return message;
    }
  }
}
