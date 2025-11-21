import { insertModule, fetchModules } from '../models/module.js';
import { modulePresenter } from '../presenters/modulePresenter.js';

export async function createModule(req, res) {
  try {
    const { trip_id, title, latitude, longitude } = req.body;
    const module = await insertModule(trip_id, title, latitude, longitude);
    res.json(modulePresenter(module));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getModules(req, res) {
  try {
    const { trip_id } = req.query;
    const modules = await fetchModules(trip_id);
    res.json(modules.map(modulePresenter));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
