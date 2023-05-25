import { StyleSheet, View } from 'react-native';
import Row from 'components/Row/Row';
import TemperaturePill from 'components/TemperaturePill/TemperaturePill';
import WeatherIcon from 'components/WeatherIcon/WeatherIcon';
import { ScrollView, Text } from 'react-native';
import MainWeatherInfo from './MainWeatherInfo';
import Loader from 'components/Loader/Loader';
import { TItemSchema } from 'api/index';

interface Props {
  loading: boolean;
  data?: TItemSchema;
}

const CityDetails: React.FC<Props> = ({ loading, data }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <Row
        justifyContent="space-between"
        alignItems="center"
        style={styles.main}>
        <WeatherIcon iconId={data?.weather[0].icon} />
        <View style={styles.nameContainer}>
          <Text style={styles.cityName}>{data?.name}</Text>
          <Text>{data?.weather[0].description}</Text>
        </View>
        <TemperaturePill temperature={data?.main.temp} />
      </Row>
      <MainWeatherInfo data={data?.main} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    paddingHorizontal: 8,
  },
  nameContainer: {
    flex: 1,
  },
  cityName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CityDetails;
