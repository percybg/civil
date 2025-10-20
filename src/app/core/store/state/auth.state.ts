import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SetToken,setAuthData,Logout,setAuthUrl } from '../actions/auth.actions';
import { AuthUserStateModel } from '../models/auth.model';
const defaults: AuthUserStateModel = {
  userName: null,
  token:null,
  refreshToken:null,
  urlLogin:null,
  urlAPISuprimentos:null,
  urlAPISP7:null,
  colaboradorViaQrCode:null
};
@State<AuthUserStateModel>({
  name: 'AuthUser',
  defaults: defaults
})
@Injectable({
  providedIn: 'root'
})
export class AuthUser {
  @Selector()
  static getUserName(state: AuthUserStateModel):String{
    return state.userName;
  }
  @Selector()
  static getToken(state: AuthUserStateModel) {
    return state.token;
  }
  @Selector()
  static getRefreshToken(state: AuthUserStateModel) {
    return state.refreshToken;
  }
  @Selector()
  static isAuthenticated(state: AuthUserStateModel) {
    return !!state.token;
  }
  @Selector()
  static noUrls(state: AuthUserStateModel) {
    return !state.urlLogin || !state.urlAPISuprimentos || !state.urlAPISP7 || !state.colaboradorViaQrCode;
  
  }
  @Selector()
  static isAuthenticatedURL(state: AuthUserStateModel) {
    return !!state.urlLogin;
  }
  @Selector()
  static geturlLogin(state: AuthUserStateModel) {
    return state.urlLogin;
  }
  @Selector()
  static getcolaboradorViaQrCode(state: AuthUserStateModel) {
    return state.colaboradorViaQrCode;
  }
  @Selector()
  static geturlParams(state: AuthUserStateModel) {
    let urlAPISuprimentos = state.urlAPISuprimentos + '/api'
    let urlAPISP7 = state.urlAPISP7 + '/api'
    return {
      urlAPISuprimentos,
      urlAPISP7
    };
  }
  @Selector()
  static geturlAPISuprimentos(state: AuthUserStateModel) {
    return state.urlAPISuprimentos;
  }
  @Selector()
  static geturlAPISP7(state: AuthUserStateModel) {
    return state.urlAPISP7;
  }
  @Action(SetToken)
  SetToken({ patchState }: StateContext<AuthUserStateModel>, { payload }: SetToken) {
    patchState({
      token: payload
    });
  }
  @Action(setAuthData)
  setAuthData({patchState}:StateContext<AuthUserStateModel>,{payload}:setAuthData){
    patchState({
      token:payload.token,
      userName:payload.userName,
      refreshToken:payload.refreshToken
    })
  }
  @Action(setAuthUrl)
  setAuthUrl({patchState}:StateContext<AuthUserStateModel>,{payload}:setAuthUrl){
    patchState({
      urlLogin:payload.urlLogin,
      urlAPISuprimentos:payload.urlAPISuprimentos,
      urlAPISP7:payload.urlAPISP7,
      colaboradorViaQrCode:payload.colaboradorViaQrCode
    })
  }
  @Action(Logout)
  logout(context: StateContext<AuthUserStateModel>) {
    context.setState({ ...defaults });
  }
}
