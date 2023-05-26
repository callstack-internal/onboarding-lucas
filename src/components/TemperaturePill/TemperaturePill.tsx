import { StyleSheet, Text } from 'react-native';
import Row from 'components/Row/Row';
import { useMemo } from 'react';

interface Props {
  temperature?: string | number;
}

const TemperaturePill: React.FC<Props> = ({ temperature = '--' }) => {
  const [color, backgroundColor] = useMemo(() => {
    const t =
      typeof temperature === 'string' ? Number(temperature) : temperature;
    if (t < 0) {
      return ['white', 'deepskyblue'];
    } else if (t <= 10) {
      return ['floralwhite', 'cadetblue'];
    } else if (t <= 20) {
      return ['gray', 'khaki'];
    } else {
      return ['white', 'gold'];
    }
  }, [temperature]);

  return (
    <Row
      justifyContent="center"
      alignItems="center"
      style={[styles.main, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{temperature} ºC</Text>
    </Row>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TemperaturePill;
