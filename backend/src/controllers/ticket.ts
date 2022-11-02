import { NextFunction, Request, Response } from "express";
// axios
import axios from "axios";

// create a ticket

export const createTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newTicket = req.body;
  try {
    const response = await axios.post(
      "https://sales-api.hsl.fi/api/sandbox/ticket/v4/order",
      newTicket,
      {
        headers: {
          "X-API-Key": "f5c778db-145d-4c61-833c-8dc039376005",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    res.status(200).json(response.data)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
