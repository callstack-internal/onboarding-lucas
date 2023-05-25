import {FlexAlignType, StyleSheet, View, ViewProps} from 'react-native';

interface TRow extends ViewProps {
  flex?: number | undefined;
  flexBasis?: number | string | undefined;
  rowGap?: number | undefined;
  gap?: number | undefined;
  columnGap?: number | undefined;
  flexGrow?: number | undefined;
  flexShrink?: number | undefined;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
}

const Row: React.FC<TRow> = ({
  flex,
  flexBasis,
  rowGap,
  gap,
  columnGap,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  ...props
}) => {
  const computedStyle = {
    flex,
    flexBasis,
    rowGap,
    gap,
    columnGap,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
  };

  return (
    <View {...props} style={[props.style, styles.container, computedStyle]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
