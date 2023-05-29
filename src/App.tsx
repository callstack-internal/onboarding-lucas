import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CityDetailsScreen from 'features/CityDetails/CityDetailsScreen';
import React from 'react';
import CitiesListScreen from './features/CitiesList/CitiesListScreen';

export type RootStackParamList = {
  Cities: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cities" component={CitiesListScreen} />
          <Stack.Screen name="Details" component={CityDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
