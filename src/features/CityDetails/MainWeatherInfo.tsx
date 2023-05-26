import { StyleSheet, Text, View } from 'react-native';
import { TItemSchema } from 'api/index';
import Row from 'components/Row/Row';

interface Props {
  data?: TItemSchema['main'];
}

const PROPS_TO_NAMES_MAP = [
  { prop: 'temp', name: 'Temperature', suffix: 'ºC' },
  { prop: 'feels_like', name: 'Feels like', suffix: 'ºC' },
  { prop: 'temp_min', name: 'Temp. min.', suffix: 'ºC' },
  { prop: 'temp_max', name: 'Temp. max', suffix: 'ºC' },
  { prop: 'pressure', name: 'Pressure', suffix: 'hPa' },
  { prop: 'humidity', name: 'Humidity', suffix: '%' },
] as const;

const MainWeatherInfo = ({ data }: Props) => {
  if (!data) return null;

  return (
    <View>
      {PROPS_TO_NAMES_MAP.map(item => {
        return (
          <Row justifyContent="space-between" style={styles.main}>
            <Text>{item.name}</Text>
            <Text>
              {data[item.prop]} {item.suffix}
            </Text>
          </Row>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});

export default MainWeatherInfo;
