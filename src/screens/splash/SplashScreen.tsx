import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../assets/images';
import {colors} from '../../../ui-kit';

type SplashScreenProps = {
  onConfigSuccess: () => void;
};

const SplashScreen = ({onConfigSuccess}: SplashScreenProps) => {
  // const getConfigInfo = async () => {
  //   setTimeout(() => {
  //     console.log('Splash');
  //     onConfigSuccess();
  //   }, 1500);
  // };

  useEffect(() => {
    setTimeout(() => {
      onConfigSuccess();
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Image style={styles.logo} source={images.privacy_policy} />
        <ActivityIndicator
          style={{marginTop: 20}}
          color={colors.primary}
          size={'large'}
        />
      </View>
    </View>
  );
};
export default SplashScreen;
