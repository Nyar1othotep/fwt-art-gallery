import { AxiosRequestConfig } from "axios";

import { IRetryQueueItem } from "../types";

export const pushRequestInQueue = (
  config: AxiosRequestConfig,
  refreshAndRetryQueue: IRetryQueueItem[],
) => {
  return new Promise((resolve, reject) => {
    refreshAndRetryQueue.push({ config, resolve, reject });
  });
};
