export default class Constants {
    static HTTP_METHOD = {
      GET: 'get',
      PUT: 'put',
      POST: 'post',
      DELETE: 'delete',
    }
}

export const authRouter = {
  login: '/auth/login',
  register: '/auth/register'
};

export const foodRouter = {
  index: '/food',
  foodDetail: (id: any) : string => `/food/${id}`,
};
