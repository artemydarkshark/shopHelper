/* @flow */
export type Action = {
  type: string,
  payload?: any,
  meta?: any
};

export type Payload<T> = {
  payload: T
};
