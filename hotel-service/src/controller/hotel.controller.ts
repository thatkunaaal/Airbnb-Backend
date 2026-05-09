import { Request,Response } from "express"
import { createHotelService, deleteHotelService, getAllHotelService, getHotelByIdService, updateHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";
import { SuccessResponse } from "../utils/common/response.util";
import { AppError } from "../utils/errors/error";

export const createHotelHandler = async (req:Request,res:Response) => {
    const hotelData = req.body;
    const hotel = await createHotelService(hotelData);

    SuccessResponse.data = hotel;
    SuccessResponse.message = "Hotel created successfully";

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
}

export const getHotelByIdHanlder = async (req: Request, res: Response) => {
    const hotelId = Number(req.params.id);

    if(Number.isNaN(hotelId)){
        throw new AppError(StatusCodes.BAD_REQUEST,"Please pass correct hotel-id");
    }

    const hotel = await getHotelByIdService(hotelId);

    SuccessResponse.data = hotel;
    SuccessResponse.message = (hotel != null) ? "Successfully fetched the hotel" : `Couldn't find hotel with id: ${hotelId}`; 

    return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
}

export const getAllHotelHandler = async (req:Request,res:Response) => {
    const limit = Number(req.body.limit);
    const offset = (Number(req.body.page)-1) * limit;
    const hotel = await getAllHotelService(limit,offset);

    SuccessResponse.data = hotel;
    SuccessResponse.message = (hotel != null) ? "Successfully fetched all the hotels" : `Hotel table is empty`;

    return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
}

export const deleteHotelHandler = async (req:Request,res:Response) => {
    const hotelId = Number(req.params.id);

    if(Number.isNaN(hotelId)){
        throw new AppError(StatusCodes.BAD_REQUEST,"Please pass correct hotel-id");
    }

    const hotel = await deleteHotelService(hotelId);

    SuccessResponse.data = hotel;
    SuccessResponse.message = (hotel == 0) ? `Hotel with id: ${hotelId} is not present` : `Hotel: ${hotelId} deleted successfully`;

    return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
}

export const updateHotelHandler = async (req:Request,res:Response) => {
    const hotelId = Number(req.params.id);
    const hotelData = req.body;

    if(Number.isNaN(hotelId)){
        throw new AppError(StatusCodes.BAD_REQUEST,"Please pass correct hotel-id");
    }

    const hotel = await updateHotelService(hotelId,hotelData);

    SuccessResponse.data = hotel;
    SuccessResponse.message = (hotel) ? `Hotel: ${hotelId} updated successfully` : `Hotel with id: ${hotelId} is not present`;

    return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
}