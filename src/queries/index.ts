import { useQuery } from '@tanstack/react-query';
import { fetchWeatherByIDs, WeatherDataSchema } from 'api/index';

export const useCitiesListWeatherByIds = ({ ids }: { ids: string[] }) => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      const res = await fetchWeatherByIDs({ ids });
      return WeatherDataSchema.parse(res).list;
    },
  });
};

export const useCityWeatherById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['details'],
    queryFn: async () => {
      const res = await fetchWeatherByIDs({ ids: [id] });
      return WeatherDataSchema.parse(res).list[0];
    },
  });
};
