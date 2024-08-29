import Http from '~/app/network/Http';
import Routes from '~/app/shared/routes'
import { type ISignInPayload } from '../domain/auth';
import { type Response } from '~/app/network/domain/interfaces';
import type { IUser } from '~/app/modules/users/domain/user';
import env from '~/app/shared/env';

const http = new Http();

export const signIn = async (payload: ISignInPayload): Promise<Response<IUser>> => {
  const url = Routes.signIn(env.apiBase);
  const response = await http.post<ISignInPayload, IUser>(url, { data: payload });
  return response;
}

export const signOut = async (): Promise<Response<string>> => {
  const url = Routes.signOut(env.apiBase);
  const response = await http.post<null, string>(url);
  return response;
}

export const me = async (): Promise<Response<IUser>> => {
  const url = Routes.me(env.apiBase);
  const response = await http.get<null, IUser>(url);
  return response;
}