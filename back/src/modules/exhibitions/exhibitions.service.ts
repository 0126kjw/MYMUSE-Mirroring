import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exhibition } from './schemas/exhibition.schema';

@Injectable()
export class ExhibitionService {
  constructor(
    @InjectModel(Exhibition.name)
    private readonly exhibitionModel: Model<Exhibition>,
  ) {}

  async findById(id: string): Promise<Exhibition> {
    const exhibition = await this.exhibitionModel.findOne({ id });
    return exhibition;
  }

  // async findOne(title: string, reponseInfo: string): Promise<any> {
  //   const test = await this.exhibitionModel
  //     .findOne({ title }, reponseInfo)
  //     .lean();
  //   return test;
  // }

  async findRightItems(endDate: Date, reponseInfo: string): Promise<any> {
    let date = await this.exhibitionModel
      .find(
        {
          period: {
            $elemMatch: {
              $gte: endDate,
            },
          },
        },
        reponseInfo,
      )
      .lean();

    date = date.filter((date) => {
      if (new Date(date.period[0]) <= endDate) {
        date.website = `https://tickets.interpark.com/goods/${date.href}`;

        delete date.period;

        return date;
      }
    });

    return date;
  }

  async pagination(page: number) {
    const perPage = 9;
    // const total = await this.exhibitionModel.countDocuments({});
    const exhibitions = await this.exhibitionModel
      .find({})
      // .sort({ createdAt: 1 })
      .skip(perPage * (page - 1))
      .limit(perPage);

    return exhibitions;
  }

  async searchExhibition(keyword: string) {
    const options = [
      { title: new RegExp(keyword) },
      { place: new RegExp(keyword) },
    ];
    const exhibitionResults = await this.exhibitionModel.find({
      $or: options,
    });

    return exhibitionResults;
  }
}
