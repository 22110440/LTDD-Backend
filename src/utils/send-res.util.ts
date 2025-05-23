import { Response } from "express";

const sendResponse = <T>(res: Response<T>, result: T) => {
  const response: any = {
    ...result,
  };

  res.status(200).json(response);
};

export default sendResponse;
