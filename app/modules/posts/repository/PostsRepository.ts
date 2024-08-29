import Http from '~/app/network/Http';
import Routes from '~/app/shared/routes'
import { type IPost } from '../domain/post';
import { type Response } from '~/app/network/domain/interfaces';
import env from '~/app/shared/env';

const http = new Http();

export const getPosts = async (): Promise<Response<Array<IPost>>> => {
  const url = Routes.getPosts(env.apiBase);
  const response = await http.get<null, Array<IPost>>(url);
  return response;
}