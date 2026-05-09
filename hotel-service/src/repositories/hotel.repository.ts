import Hotel from "../db/models/hotel";
import { createHotelDTO, updateHotelDTO } from "../dto/hotel.dto";
import { logger } from "../config/logger.config";

export const createHotel = async (hotelData: createHotelDTO) => {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData?.rating,
    rating_count: hotelData?.ratingCount,
  });

  logger.info(`Hotel created: ${hotel.id}`);

  return hotel;
};

export const getHotelById = async (hotelId: number) => {
  const hotel = await Hotel.findByPk(hotelId);

  return hotel;
};

export const getAllHotel = async (limit: number, offset: number) => {
  const hotel = await Hotel.findAll({ limit: limit, offset: offset });

  return hotel;
};

export const deleteHotel = async (hotelId: number) => {
  const hotel = await Hotel.destroy({
    where: {
      id: hotelId,
    },
  });

  return hotel;
};

export const updateHotel = async (
  hotelId: number,
  hotelData: updateHotelDTO,
) => {
  const hotel = await Hotel.update(
    {
      ...(hotelData.name && { name: hotelData.name }),
      ...(hotelData.address && { address: hotelData.address }),
      ...(hotelData.location && { location: hotelData.location }),
      ...(hotelData.rating && { rating: hotelData.rating }),
      ...(hotelData.ratingCount && { rating_count: hotelData.ratingCount }),
    },
    {
      where: {
        id: hotelId,
      },
    },
  );

  return hotel;
};
