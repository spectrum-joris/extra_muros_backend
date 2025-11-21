export function modulePresenter(module) {
    return {
      id: module.id,
      tripId: module.trip_id,
      title: module.title,
      latitude: module.latitude,
      longitude: module.longitude,
      createdAt: module.created_at
    };
  }
  