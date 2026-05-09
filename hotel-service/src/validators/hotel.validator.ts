import z from "zod";


export const hotelSchema = z.object({
    name : z.string().min(1),
    address : z.string().min(1),
    location : z.string().min(1),
    rating : z.number().nonnegative().optional(),
    ratingCount : z.number().positive().optional(),
})

export const updateHotelSchema = z.object({
    name : z.string().min(1).optional(),
    address : z.string().min(1).optional(),
    location : z.string().min(1).optional(),
    rating : z.number().nonnegative().optional(),
    ratingCount : z.number().nonnegative().optional()
});