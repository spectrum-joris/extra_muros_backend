export function tripPresenter(trip) {
  return {
    id: trip.id,
    title: trip.title,
    createdAt: trip.created_at
  };
}
