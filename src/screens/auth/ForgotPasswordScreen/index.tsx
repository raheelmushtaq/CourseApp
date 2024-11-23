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

const ForgotPasswordScreen = () => {
  const {email, emailError, handleEmailChange, forgotPassword} = useContoller();
  return (
    <AppBackground title={'Forgot Password'}>
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
          Enter the email associated with your account & we’ll send an email
          with instructions to reset your password.
        </Text>
        <InputField
          value={email}
          label="Email"
          placeholder="Email"
          isPasswordInput={false}
          onChangeText={handleEmailChange}
          keyboardType={'email-address'}
          error={emailError}
        />

        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Submit"
          onPress={forgotPassword}
          type={'primary'}
        />
      </View>
    </AppBackground>
  );
};

export default ForgotPasswordScreen;
