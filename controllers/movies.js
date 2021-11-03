import { Movie } from '../models/movie.js'

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie'
  })
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const movie = new Movie(req.body)
  movie.save(function(err){
    if (err) {
      return res.redirect('/movies/new')
    }
    res.redirect('/movies')
  })
}

function index(req, res) {
  Movie.find({}, function(err, movies){
    res.render('movies/index', {
      movies,
      title: 'All Movies'
    })
  })
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    res.render('movies/show', {
      movie,
      title: 'Movie Detail'
    })
  })
}

function createReview(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.reviews.push(req.body)
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}

export {
  newMovie as new,
  create,
  index,
  show,
  createReview
}