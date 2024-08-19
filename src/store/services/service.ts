import axios from 'axios';
import { TrackersType } from 'types/api/trackersType';

const database_uri = import.meta.env.VITE_API_KEY;
const username = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;

if (!database_uri) {
  throw new Error('VITE_API_KEY is not defined');
}

if (!username || !password) {
  throw new Error('VITE_USERNAME or VITE_PASSWORD is not defined');
}

const authHeader = 'Basic ' + btoa(`${username}:${password}`);

const axiosInstance = axios.create({
  baseURL: database_uri,
  headers: {
    Authorization: authHeader,
  },
});

export const getTrackers = async (): Promise<TrackersType[]> => {
  try {
    const response = await axiosInstance.get<TrackersType[]>('/api/devices');
    return response.data;
  } catch (error) {
    console.error('Error fetching trackers:', error);
    throw new Error('Failed to fetch trackers');
  }
};

export const getTrackersId = async (id: string): Promise<TrackersType> => {
  try {
    const response = await axiosInstance.get<TrackersType>(
      `/api/devices/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching tracker with ID ${id}:`, error);
    throw new Error('Failed to fetch tracker by ID');
  }
};

const service = {
  getTrackers,
  getTrackersId,
};

export default service;
