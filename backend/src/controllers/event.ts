import { NextFunction, Request, Response } from "express";
// axios
import axios from "axios";

// get all events

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      "http://open-api.myhelsinki.fi/v1/events/?distance_filter=60.1699%2C24.9384%2C10&language_filter=en&limit=100"
    );
      const data = response.data()
      res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
