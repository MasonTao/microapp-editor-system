import { createLogger } from 'redux-logger';
export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      console.error(e.message)
    },
  },
};