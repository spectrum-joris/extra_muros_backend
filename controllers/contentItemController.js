import { insertContentItem, fetchContentItems } from '../models/contentItem.js';
import { contentItemPresenter } from '../presenters/contentItemPresenter.js';

export async function createContentItem(req, res) {
  try {
    const { trip_id, module_id, type, title, body, storage_path, published } = req.body;
    const item = await insertContentItem(trip_id, module_id, type, title, body, storage_path, published);
    res.json(contentItemPresenter(item));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getContentItems(req, res) {
  try {
    const { trip_id, module_id } = req.query;
    const items = await fetchContentItems(trip_id, module_id);
    res.json(items.map(contentItemPresenter));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
