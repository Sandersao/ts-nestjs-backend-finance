import { UuidVo } from './uuid.vo';

export class CriacaoVo {
  constructor(
    private readonly _date: Date,
    private readonly _user?: UuidVo,
  ) {}

  static create(date: Date, user: string) {
    return new CriacaoVo(date, UuidVo.create(user));
  }

  get date() {
    return this._date;
  }

  get user() {
    return this._user;
  }
}
