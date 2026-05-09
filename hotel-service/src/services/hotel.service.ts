import { createHotelDTO, updateHotelDTO } from "../dto/hotel.dto";
import { createHotel, deleteHotel, getAllHotel, getHotelById, updateHotel } from "../repositories/hotel.repository";


export const createHotelService = async (hotelData : createHotelDTO) => {
    const hotel = await createHotel(hotelData);

    return hotel;
}

export const getHotelByIdService = async (hotelId : number) => {
    const hotel = await getHotelById(hotelId);

    return hotel;
}

export const getAllHotelService = async (limit:number,offset:number) => {
    const hotel = await getAllHotel(limit,offset);

    return hotel;
}

export const deleteHotelService = async (hotelId: number) => {
    const hotel = await deleteHotel(hotelId);

    return hotel;
}

export const updateHotelService = async (hotelId:number,hotelData:updateHotelDTO) => {
    const hotel = await updateHotel(hotelId,hotelData);

    return hotel;
}