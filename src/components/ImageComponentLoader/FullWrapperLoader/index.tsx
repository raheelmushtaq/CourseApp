import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../../../ui-kit';
type FullWrapperLoaderProps = {
  loading: boolean;
  color: string;
};
export const FullWrapperLoader = ({loading, color}: FullWrapperLoaderProps) => {
  if (!loading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    backgroundColor: colors.blackOverlay,
    alignItems: 'center',
  },
  loader: {},
});

export default FullWrapperLoader;
