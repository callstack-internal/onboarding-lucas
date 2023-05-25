import { z } from 'zod';

const WeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const CoordSchema = z.object({
  lon: z.number(),
  lat: z.number(),
});

const SysSchema = z.object({
  country: z.string(),
  timezone: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
});

const MainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  humidity: z.number(),
});

const WindSchema = z.object({
  speed: z.number(),
  deg: z.number(),
});

const CloudsSchema = z.object({
  all: z.number(),
});

const ItemSchema = z.object({
  coord: CoordSchema,
  sys: SysSchema,
  weather: z.array(WeatherSchema),
  main: MainSchema,
  visibility: z.number(),
  wind: WindSchema,
  clouds: CloudsSchema,
  dt: z.number(),
  id: z.number(),
  name: z.string(),
});

export type TItemSchema = z.infer<typeof ItemSchema>;

export const WeatherDataSchema = z.object({
  cnt: z.number(),
  list: z.array(ItemSchema),
});

export type TWeatherDataSchema = z.infer<typeof WeatherDataSchema>;

export const useWeatherByIDs = async ({ ids }: { ids: string[] }) => {
  try {
    const idsString = ids.join(',');
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/group?units=metric&id=${idsString}&appid=514d71a595ec192ec6249a17bc7ff7f0`,
    );
    return res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
