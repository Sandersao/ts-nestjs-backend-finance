import { UuidVo } from './uuid.vo';

export class CriacaoVo {
  constructor(
    private readonly _date: Date,
    private readonly _user?: UuidVo,
  ) {}

  get date() {
    return this._date;
  }

  get use() {
    return this._user;
  }
}
