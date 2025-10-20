export class SetToken {
  static readonly type = '[AuthUser] SetToken';
  constructor(public payload: string) {}
}
export class setAuthData {
  static readonly type = '[AuthUser] setAuthData';
  constructor(public payload: any) {}
}
export class setAuthUrl {
  static readonly type = '[AuthUser] setAuthUrl';
  constructor(public payload: any) {}
}
export class Logout{
  static readonly type = '[AuthUser] Logout';
};
export class ParametrosApp{
  static readonly type = '[AuthUser] AppParams';
} ;
