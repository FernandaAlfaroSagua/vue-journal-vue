// Son asincronas porque se conectan con la API
// Deben de llamar a una mutacion

import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get(`/entries.json`);
  const entries = [];
  if (!data) {
    commit("setEntries", entries);
    return;
  }
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  await journalApi.put(`/entries/${id}.json`, dataToSave);

  commit("updateEntries", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  const { data } = await journalApi.post(`/entries.json`, dataToSave);
  dataToSave.id = data.name;
  commit("addEntry", dataToSave);
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
  return id;
};
