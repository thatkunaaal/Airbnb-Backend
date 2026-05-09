import express from "express";
import pingRoutes from "./pingRouter";
import hotelRoutes from "./hotelRouter";

const router = express.Router();

router.use('/ping',pingRoutes);
router.use('/hotels',hotelRoutes);

export default router;