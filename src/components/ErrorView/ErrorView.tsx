import Row from 'components/Row/Row';
import { Text } from 'react-native/types';

interface Props {
  error?: string | null;
}
const ErrorView = ({ error }: Props) => {
  return (
    <Row alignItems="center" justifyContent="center">
      <Text>Bummer!🤬</Text>
      {!!error && <Text>{error}</Text>}
    </Row>
  );
};

export default ErrorView;
