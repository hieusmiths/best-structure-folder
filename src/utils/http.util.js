export function httpHandleResponse(response) {
  if (response) {
    if(response.data.status) {
      return { data:  response.data.data || {}, message: response.data.message || '' }
    }
  }
  return false;
}
