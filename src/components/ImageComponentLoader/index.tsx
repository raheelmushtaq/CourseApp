import React, {useState} from 'react';
import FastImage, {ResizeMode, Source} from 'react-native-fast-image';
import {
  ImageRequireSource,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import FullWrapperLoader from './FullWrapperLoader';
import {images} from '../../assets/images';
import {colors} from '../../../ui-kit';

type ImageComponentLoaderProps = {
  containerStyle?: ViewStyle;
  source?: Source | ImageRequireSource;
  resizeMode?: ResizeMode;
  tintColor?: string;
};
const ImageComponentLoader = ({
  containerStyle,
  resizeMode,
  source,
}: ImageComponentLoaderProps) => {
  const [isImageLoad, setIsImageLoad] = useState(false);
  return (
    <View style={containerStyle}>
      <FastImage
        onLoadStart={() => setIsImageLoad(true)}
        onLoadEnd={() => setIsImageLoad(false)}
        style={[styles.image, containerStyle]}
        resizeMode={resizeMode}
        source={source ? source : images.noimage}
        defaultSource={images.noimage}
      />
      <FullWrapperLoader loading={isImageLoad} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default ImageComponentLoader;
