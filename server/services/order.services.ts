import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import OrderModel from "../models/order.model";

//Create New Order
export const newOrder = CatchAsyncError(
  async (data: any, next: NextFunction, res: Response) => {
    const order = await OrderModel.create(data);

    res.status(201).json({
      sucesss: true,
      order,
    });
  }
);
