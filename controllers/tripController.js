import { insertTrip, fetchTrips } from '../models/trip.js';
import { tripPresenter } from '../presenters/tripPresenter.js';

export async function createTrip(req, res) {
  try {
    const { title } = req.body;
    const trip = await insertTrip(title, req.userId);
    res.json(tripPresenter(trip));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getTrips(req, res) {
  try {
    const trips = await fetchTrips(req.userId);
    res.json(trips.map(tripPresenter));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
