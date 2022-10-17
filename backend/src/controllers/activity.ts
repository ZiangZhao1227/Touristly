import { NextFunction, Request, Response } from "express";
// axios
import axios from "axios";

// get all activities

export const getActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      "https://open-api.myhelsinki.fi/v2/activities?language_filter=en"
    );
    res.status(200).json(response.data.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
