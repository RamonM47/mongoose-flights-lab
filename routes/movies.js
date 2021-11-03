import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
const router = Router()

// localhost:3000/movies
router.get('/', moviesCtrl.index)

// localhost:3000/movies/new
router.get('/new', moviesCtrl.new)

// localhost:3000/movies/:id
router.get('/:id', moviesCtrl.show)

// localhost:3000/movies
router.post('/', moviesCtrl.create)

// localhost:3000/movies/:id/reviews
router.post('/:id/reviews', moviesCtrl.createReview)

export {
  router
}
