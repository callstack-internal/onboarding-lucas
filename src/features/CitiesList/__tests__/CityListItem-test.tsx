import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CityListItem from '../CityListItem';

describe('CityListItem', () => {
  const mockProps = {
    cityName: 'Test City',
    conditions: 'Cloudy',
    temp: 25,
    icon: 'cloud',
    onPress: jest.fn(),
  };

  it('should render the city name, conditions, and temperature', () => {
    const {getByText} = render(<CityListItem {...mockProps} />);
    const cityNameElement = getByText('Test City');
    const conditionsElement = getByText('Cloudy');
    const temperatureElement = getByText('25°C');

    expect(cityNameElement).toBeDefined();
    expect(conditionsElement).toBeDefined();
    expect(temperatureElement).toBeDefined();
  });

  it('should call the onPress function when pressed', () => {
    const {getByTestId} = render(<CityListItem {...mockProps} />);
    const touchableElement = getByTestId('city-item');

    fireEvent.press(touchableElement);

    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
