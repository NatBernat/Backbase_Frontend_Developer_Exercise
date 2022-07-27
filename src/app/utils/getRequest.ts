import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Place } from 'src/app/types/types';

// This could be part of a `weather` service, it can be placed inside the folder `app/services/weather.service.ts`
export const getRequest = async ({ lat, lon }: Place) => {
  try {
    // 👍: Accessing configuration from the environment is a good practice,
    //     we could have diferent configurations for development and production
    const apiKey = environment.apiKey;

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // There is an angular built-in service `HttpClient` that can be injected to make http requests
    // that integrates better with the angular way of working
    // Reference: https://angular.io/guide/http
    const { data } = await axios.get(endpoint);
    console.log(data.name);

    return data;
  } catch (error) {
    console.error(error);
  }
};
