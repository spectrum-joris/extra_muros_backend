export function contentItemPresenter(item) {
    return {
      id: item.id,
      tripId: item.trip_id,
      moduleId: item.module_id,
      type: item.type,
      title: item.title,
      body: item.body,
      storagePath: item.storage_path,
      published: item.published,
      updatedAt: item.updated_at
    };
  }
  