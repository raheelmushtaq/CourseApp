import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import TouchableComponent from '../../../../ui-kit/src/components/Touchable';
import {colors} from '../../../../ui-kit';

type SocialButtonWrapperProps = {
  imageName: ImageProps;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  onPress: () => void;
  disabled?: boolean;
};
const SocialButtonWrapper = ({
  imageName,
  containerStyle,
  imageStyle,
  onPress,
  disabled,
}: SocialButtonWrapperProps) => {
  return (
    <TouchableComponent
      onPress={onPress}
      isDisabled={disabled}
      containerStyle={[styles.container, containerStyle]}>
      <Image source={imageName} style={[styles.imageStyle, imageStyle]} />
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 90,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  imageStyle: {width: 30, height: 30, resizeMode: 'contain'},
});

export default SocialButtonWrapper;
