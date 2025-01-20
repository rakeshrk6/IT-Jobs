import { amazonController } from "./controllers/amazon.js"
import { googleController } from "./controllers/google.js"
import { internshalaController } from "./controllers/internshala.js"

import { Router } from "express";

const router = Router();


router.route('/internshala').get(internshalaController)
router.route('/amazon').get(amazonController)
router.route('/google').get(googleController)

export default router


