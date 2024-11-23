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

const SignInScreen = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    validateLogin,
    openRegisteration,
    openForgotPassword,
  } = useContoller();
  return (
    <AppBackground showRightIcon={false} title={'Login'}>
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
        <InputField
          value={email}
          label="Email"
          placeholder="Email"
          isPasswordInput={false}
          onChangeText={handleEmailChange}
          keyboardType={'email-address'}
          error={emailError}
        />
        <InputField
          value={password}
          label="Password"
          placeholder="Password"
          onChangeText={handlePasswordChange}
          keyboardType={'default'}
          isPasswordInput={true}
          error={passwordError}
        />

        <View
          style={{
            marginVertical: dimensions.margin.medium,
            marginHorizontal: dimensions.margin.small,
          }}>
          <TouchableComponent onPress={openForgotPassword}>
            <Text style={{alignSelf: 'flex-end', color: colors.activeBorder}}>
              Forgot Password?
            </Text>
          </TouchableComponent>
        </View>

        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Login"
          onPress={validateLogin}
          type={'primary'}
        />

        <Text
          style={{
            alignSelf: 'center',
            marginVertical: dimensions.margin.small,
          }}>
          Or
        </Text>

        <Button
          title="Register"
          onPress={openRegisteration}
          type={'secondary'}
        />

        <Separator
          showTransparent
          showVertical
          height={dimensions.margin.large}
        />
        <SocialLoginsOptions setSpinnerLoading={() => {}} disabled={false} />
      </View>
    </AppBackground>
  );
};

export default SignInScreen;
