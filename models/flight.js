import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 1}
  }, {
    timestamps: true,
})

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Spirit', 'Alaska', 'United']},
  airport: {type: String, enum: ['JFK', 'FLA', 'DEN', 'LAX', 'SFX'], default: 'DEN'},
  flightNo: {type: Number, required: true, min: 10, max: 9999},
  departs: {type: Date, default: function() {
    let date = new Date()
    date.setFullYear(date.getFullYear() + 1)
    return date
  }},
  ticket: [ticketSchema],
  destination: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
  }, {
    timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}