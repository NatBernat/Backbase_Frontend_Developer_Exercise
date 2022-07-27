export interface Place {
  lat: number;
  lon: number;
}

/**
 * It is better to be explicit with all the names,
 * there will be time for optimization when transpiling the source code
 */
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export enum Units {
  standard = 'standard', // Kelvin
  metric = 'metric', // Celsius
  imperial = 'imperial', // Fahrenheit

}

export interface WeatherGetResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
