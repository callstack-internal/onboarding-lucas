import { Image, ImageProps, StyleSheet } from 'react-native';

interface Props extends Omit<ImageProps, 'source'> { }

const Chevron: React.FC<Props> = props => {
  return (
    <Image
      {...props}
      source={require('../../assets/right-chevron.png')}
      style={styles.main}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    width: 16,
    height: 16,
  },
});

export default Chevron;
