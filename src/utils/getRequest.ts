import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Place } from 'src/types/types';

export const getRequest = async ({ lat, lon }: Place) => {
  try {
    const apiKey = environment.apiKey;

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const data: any = await axios.get(endpoint);

    return data;
  } catch (error) {
    console.error(error);
  }
};
