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

  // async findAll(): Promise<Exhibition[]> {
  //   const exhibitions = await this.exhibitionModel.find();
  //   return exhibitions;
  // }

  async findById(id: string): Promise<Exhibition> {
    const exhibition = await this.exhibitionModel.findOne({ id });
    return exhibition;
  }

  async findRightItems(
    dateBefore: Date,
    dateAfter: Date,
    reponseInfo: string,
  ): Promise<any> {
    const date = await this.exhibitionModel
      .find(
        {
          period: {
            $elemMatch: {
              $gte: dateBefore,
              $lte: dateAfter,
            },
          },
        },
        reponseInfo,
      )
      .lean();
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
