import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Row from 'components/Row/Row';
import WeatherIcon from 'components/WeatherIcon/WeatherIcon';
import TemperaturePill from 'components/TemperaturePill/TemperaturePill';
import Chevron from 'components/Chevron/Chevron';

interface Props {
  cityName: string;
  conditions: string;
  temp: number;
  icon: string;
  id: number;
  onPress(id: number): void;
}

const CityListItem = ({
  cityName,
  conditions,
  temp,
  icon,
  id,
  onPress,
}: Props) => {
  const handleOnPress = () => onPress?.(id);
  return (
    <TouchableOpacity onPress={handleOnPress} id="city-item">
      <Row
        justifyContent="space-between"
        alignItems="center"
        style={styles.main}>
        <WeatherIcon iconId={icon} />
        <View style={styles.nameContainer}>
          <Text style={styles.cityName}>{cityName}</Text>
          <Text>{conditions}</Text>
        </View>
        <TemperaturePill temperature={temp} />
        <Chevron />
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CityListItem;
