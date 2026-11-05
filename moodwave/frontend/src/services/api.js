import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // proxy vers le backend
});

export async function fetchPlaylist(moodId) {
  const response = await api.get(`/playlist/${moodId}`);
  return response.data;
}