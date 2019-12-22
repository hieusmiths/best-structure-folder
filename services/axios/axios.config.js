import axios from 'axios';

const HOST_API = 'http://localhost:8888/api/v1/';
export default async (METHOD, END_POINT, BODY, PARAMS, HEADERS, OPTIONS) => {
  try {
    const response = await axios({
      url: `${HOST_API}/${END_POINT}`,
      method: METHOD,
      data: BODY,
      params: PARAMS,
      headers: {
        ...HEADERS,
      },
      ...OPTIONS,
    });
    return response;
  } catch (error) {
    return false;
  }
};
