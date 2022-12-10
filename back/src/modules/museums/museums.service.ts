import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Museum } from './schemas/museum.schema';

@Injectable()
export class MuseumService {
  constructor(
    @InjectModel(Museum.name)
    private readonly museumModel: Model<Museum>,
  ) {}

  async findById(id: number): Promise<Museum> {
    const museum = await this.museumModel.findOne({ id });
    return museum;
  }

  async findOne(facilityName: string, reponseInfo: string): Promise<any> {
    const test = await this.museumModel
      .findOne({ name: facilityName }, reponseInfo)
      .lean();
    return test;
  }

  async findRightItems(
    address: string,
    category: string,
    reponseInfo: string,
  ): Promise<Museum> {
    return await this.museumModel
      .find({ oldAddress: { $regex: address }, category }, reponseInfo)
      .lean();
  }

  async pagination(page: number) {
    const perPage = 9;
    // const total = await this.museumModel.countDocuments({});
    // console.log(total);
    const museums = await this.museumModel
      .find({})
      .skip(perPage * (page - 1))
      .limit(perPage);

    return museums;
  }

  async searchMuseum(keyword: string) {
    const museumResults = await this.museumModel.find({
      name: new RegExp(keyword),
    });

    return museumResults;
  }
}
