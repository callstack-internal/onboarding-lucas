import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useSetNavigationOptions from 'hooks/useSetNavigationOptions';
import { useCityWeatherById } from 'queries/index';
import { RootStackParamList } from 'src/App';
import CityDetails from './CityDetails';

const CityDetailsScreen = () => {
  const { params } =
    useRoute<NativeStackScreenProps<RootStackParamList, 'Details'>['route']>();
  const id = params.id;
  const { data, isFetching, isError } = useCityWeatherById({ id });

  useSetNavigationOptions({ title: data?.name || 'Details' });
  return <CityDetails isFetching={isFetching} data={data} isError={isError} />;
};

export default CityDetailsScreen;
