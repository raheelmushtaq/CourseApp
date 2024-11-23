import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

import {SafeAreaView} from 'react-native-safe-area-context';
import useContoller from './controller';
import InputField from '../../../../ui-kit/src/components/InputField';
import {Button, colors, dimensions, Separator} from '../../../../ui-kit';
import TouchableComponent from '../../../../ui-kit/src/components/Touchable';
import SocialLoginsOptions from '../../../components/SocialLoginsOptions';
import {images} from '../../../assets/images';
import AppBackground from '../../../../ui-kit/src/components/RootView/AppBackground';

const ResetPasswordScreen = () => {
  const {
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
    handleConfirmPasswordChange,
    handlePasswordChange,
    submit,
    isUserLoggedIn,
  } = useContoller();
  return (
    <AppBackground
      title={isUserLoggedIn ? 'Change Password' : 'Reset Password'}>
      <View style={[styles.buttonContainer, {flex: 1}]}>
        <Image
          source={images.privacy_policy}
          style={{
            alignSelf: 'center',
            height: 50,
            width: 50,
            resizeMode: 'contain',
            marginVertical: dimensions.margin.xLarge,
          }}
        />

        <Text
          style={{
            alignSelf: 'center',
            marginVertical: dimensions.margin.small,
          }}>
          Enter the new password you want to set for your account
        </Text>

        <InputField
          value={password}
          label="Password"
          placeholder="Password"
          onChangeText={handlePasswordChange}
          keyboardType={'default'}
          isPasswordInput={true}
          error={passwordError}
        />
        <InputField
          value={confirmPassword}
          label="Confirm Password"
          placeholder="Confirm Password"
          onChangeText={handleConfirmPasswordChange}
          keyboardType={'default'}
          isPasswordInput={true}
          error={confirmPasswordError}
        />

        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Submit"
          onPress={submit}
          type={'primary'}
        />
      </View>
    </AppBackground>
  );
};

export default ResetPasswordScreen;
