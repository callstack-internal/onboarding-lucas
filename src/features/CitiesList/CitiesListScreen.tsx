import { useCitiesListWeatherByIds } from 'queries/index';
import CitiesList from './CitiesList';

const CitiesListScreen: React.FC = () => {
  const { status, data } = useCitiesListWeatherByIds({
    ids: [
      '755889',
      '3081368',
      '703448',
      '702550',
      '757452',
      '3088825',
      '2511287',
      '3370726',
      '5880054',
    ],
  });

  return <CitiesList data={data} loading={status === 'loading'} />;
};

export default CitiesListScreen;
