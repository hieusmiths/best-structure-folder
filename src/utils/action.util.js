export function createAction(type, payload = {}, error, options) {
  return {
    type, payload, error, options,
  };
}

