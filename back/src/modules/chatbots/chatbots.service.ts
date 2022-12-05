import { Injectable } from '@nestjs/common';
import dialogflow from '@google-cloud/dialogflow';
import { ExhibitionService } from '../exhibitions/exhibitions.service';
import { MuseumService } from '../museums/museums.service';

@Injectable()
export class ChatbotService {
  constructor(
    private readonly exhibitionService: ExhibitionService,
    private readonly museumService: MuseumService,
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
    const intent = result.intent;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    // const exhibitionDateSearch = async (name: string, reponseInfo: string) => {
    //   return await this.exhibitionModel.find({ name }, reponseInfo).lean();
    // };

    if (intent) {
      const fields = result.parameters.fields;
      const displayName = intent.displayName;
      // const condition = fields.facilityName.stringValue || '';
      const condition =
        displayName === 'facilityAreaSearch'
          ? ''
          : fields.facilityName.stringValue;

      switch (displayName) {
        case 'facilityContact':
          return await this.museumService.findOne(condition, 'contactInfo');

        case 'facilityAreaSearch':
          const borough =
            fields.location.structValue.fields['subadmin-area'].stringValue;
          const category = fields.facilityCategory.stringValue;

          return await this.museumService.findRightItems(
            borough,
            category,
            'name oldAddress website',
          );

        case 'facilityAddress':
          return await this.museumService.findOne(
            condition,
            'newAddress oldAddress',
          );

        case 'facilityOpeningHours':
          return await this.museumService.findOne(
            condition,
            'mon tue wed thu fri sat sun offday',
          );

        case 'facilityTicket':
          return await this.museumService.findOne(
            condition,
            'isFree adultFee youthFee childFee',
          );

        case 'facilityOthers':
          return await this.museumService.findOne(condition, 'website');

        case 'exhibitionDateSearch':
          return await this.exhibitionService.findRightItems(
            condition,
            'period',
          );
      }
    } else {
      const message = { errorMessage: 'No intent matched.' };

      return message;
    }
  }
}
