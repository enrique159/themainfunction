import Http from '~/app/network/Http';
import Routes from '~/app/shared/routes'
import { type ISignInPayload } from '../domain/auth';
import { type Response } from '~/app/network/domain/interfaces';
import type { IUser } from '~/app/modules/users/domain/user';

const http = new Http();

export const signIn = async (payload: ISignInPayload): Promise<Response<IUser>> => {
  const url = Routes.signIn('http://localhost:3333');
  const response = await http.post<ISignInPayload, IUser>(url, { data: payload });
  return response;
}