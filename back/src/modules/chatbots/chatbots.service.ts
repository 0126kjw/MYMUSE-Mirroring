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

  async SearchSpecificDate(result: any): Promise<any> {
    const text = result.queryText;
    const regex = /[^0-9]/g;
    const number = Number.parseInt(text.replace(regex, ''));
    const schedule = text.indexOf(number) >= 0 ? number : text;
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const date = newDate.getDate();
    const day = newDate.getDay();
    const week = ['월', '화', '수', '목', '금', '토', '일'];
    const numberOfDays = 7;
    let addDate = 1;

    for (let i = day; i <= week.length; i++) {
      addDate++;
      if (week[i] == '일') break;
    }

    const sunday = date + addDate;
    const monday = sunday - numberOfDays + 1;
    const friday = monday + 4;
    const satday = sunday - 1;
    const nextSunday = sunday + numberOfDays;
    const nextmonday = monday + numberOfDays;
    const nextFriday = nextmonday + 4;
    const nextSatday = nextSunday - 1;
    let dateBefore = null;
    let dateAfter = null;

    if (typeof schedule === 'string') {
      if (schedule.indexOf('이번주') >= 0) {
        if (schedule.indexOf('주말') >= 0) {
          dateBefore = new Date(year, month, satday);
          dateAfter = new Date(year, month, sunday);
        } else if (schedule.indexOf('평일') >= 0) {
          dateBefore = new Date(year, month, monday);
          dateAfter = new Date(year, month, friday);
        } else {
          dateBefore = new Date(year, month, monday);
          dateAfter = new Date(year, month, sunday);
        }
      } else if (schedule.indexOf('다음주') >= 0) {
        if (schedule.indexOf('주말') >= 0) {
          dateBefore = new Date(year, month, nextSatday);
          dateAfter = new Date(year, month, nextSunday);
          console.log(dateBefore);
          console.log(dateAfter);
        } else if (schedule.indexOf('평일') >= 0) {
          dateBefore = new Date(year, month, nextmonday);
          dateAfter = new Date(year, month, nextFriday);
        } else {
          dateBefore = new Date(year, month, nextmonday);
          dateAfter = new Date(year, month, nextSunday);
        }
      }
    } else {
      dateBefore = new Date(year, month - 1, 2);
      dateAfter = new Date(year, month, 1);
    }
    return { dateBefore, dateAfter };
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

        contactInfo.facilitiyName = facilityName;

        return contactInfo;

      case 'facilityAddress':
        const addressInfo = await this.museumService.findOne(
          facilityName,
          'newAddress oldAddress',
        );

        addressInfo.facilitiyName = facilityName;

        return addressInfo;

      case 'facilityOpeningHours':
        const openingHours = await this.museumService.findOne(
          facilityName,
          'mon tue wed thu fri sat sun offday',
        );

        openingHours.facilitiyName = facilityName;

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
        const { dateBefore, dateAfter } = await this.SearchSpecificDate(result);
        return await this.exhibitionService.findRightItems(
          dateBefore,
          dateAfter,
          'title',
        );
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
    console.log('Detected intent');
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    // console.log(result);
    if (result.intent) {
      const IntetedAnswer = await this.getIntentedAnswer(result);
      return IntetedAnswer;
    } else {
      const message = { errorMessage: 'No intent matched.' };

      return message;
    }
  }
}
