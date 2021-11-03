import { Router } from 'express'
import * as destinationsCtrl from "../controllers/destinations.js";
const router = Router()

router.post('/', destinationsCtrl.create)
router.get('/new', destinationsCtrl.new)


export {
  router
}