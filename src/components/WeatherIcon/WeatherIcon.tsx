import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  iconId?: string;
}
const WeatherIcon = ({ iconId }: Props) => {
  return (
    <FastImage
      source={{ uri: `https://openweathermap.org/img/w/${iconId}.png` }}
      style={styles.conditionsIcon}
    />
  );
};

const styles = StyleSheet.create({
  conditionsIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherIcon;
