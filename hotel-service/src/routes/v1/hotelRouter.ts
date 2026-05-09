import express from "express";
import {
  createHotelHandler,
  deleteHotelHandler,
  getAllHotelHandler,
  getHotelByIdHanlder,
  updateHotelHandler,
} from "../../controller/hotel.controller";
import { validateBody } from "../../validators";
import {
  hotelSchema,
  updateHotelSchema,
} from "../../validators/hotel.validator";

const router = express.Router();

router.post("/", validateBody(hotelSchema), createHotelHandler);
router.get("/:id", getHotelByIdHanlder);
router.get("/", getAllHotelHandler);
router.delete("/:id", deleteHotelHandler);
router.patch("/:id", validateBody(updateHotelSchema), updateHotelHandler);

export default router;
