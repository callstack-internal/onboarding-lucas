import Row from 'components/Row/Row';
import { ActivityIndicator } from 'react-native';

const Loader: React.FC = () => (
  <Row justifyContent="center" alignItems="center" flex={1}>
    <ActivityIndicator size="large" />
  </Row>
);

export default Loader;
