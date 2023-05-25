import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useSetNavigationOptions = (options: Partial<{}>) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(options);
  }, [options]);

  return null;
};

export default useSetNavigationOptions;
