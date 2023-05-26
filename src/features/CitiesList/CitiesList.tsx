import { useNavigation } from '@react-navigation/native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { TItemSchema } from 'api/index';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import CityListItem from './CityListItem';

interface Props {
  data?: TItemSchema[];
  loading: boolean;
  error?: string | null;
}
const CitiesList: React.FC<Props> = ({ data, loading, error }) => {
  const navigation = useNavigation();

  const handleNavigateToDetails = (id: number) =>
    navigation.navigate('Details', { id });

  const renderItem: ListRenderItem<TItemSchema> = ({ item }) => (
    <CityListItem
      cityName={item.name}
      conditions={item.weather[0].description}
      temp={item.main.temp}
      icon={item.weather[0].icon}
      id={item.id}
      onPress={handleNavigateToDetails}
    />
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={50}
        keyExtractor={keyExtractor}
        refreshing={loading}
      />
    </View>
  );
};

function keyExtractor(item: TItemSchema) {
  return 'item' + item.id;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CitiesList;
