import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';

import useContoller from './controller';
import InputField from '../../../../ui-kit/src/components/InputField';
import {Button, colors, dimensions, Separator} from '../../../../ui-kit';
import SocialLoginsOptions from '../../../components/SocialLoginsOptions';
import AppBackground from '../../../../ui-kit/src/components/RootView/AppBackground';
import PhoneNumberField from '../../../../ui-kit/src/components/PhoneNumberField';
import CheckBox from '../../../../ui-kit/src/components/CheckBox/CheckBox';

const SignUpScreen = () => {
  const {
    name,
    email,
    countryCode,
    phoneNumber,
    password,
    confirmPassword,
    isTermsAccepted,
    nameError,
    emailError,
    phoneNumberError,
    passwordError,
    confirmPasswordError,
    handleNameChange,
    handleEmailChange,
    handleCountryCode,
    handePhoneNumebrChange,
    handleConfirmPasswordChange,
    handlePasswordChange,
    toggleIsTermAcceptedChange,
    login,
    register,
  } = useContoller();
  return (
    <AppBackground
      isScrollEnabled={false}
      showRightIcon={false}
      title={'Register'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.buttonContainer, {flex: 1}]}>
        <InputField
          value={name}
          label="Name"
          placeholder="Name"
          isPasswordInput={false}
          onChangeText={handleNameChange}
          keyboardType={'default'}
          error={nameError}
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
        <PhoneNumberField
          phoneNumber={phoneNumber}
          phoneNumberError={phoneNumberError}
          onCodeSelected={handleCountryCode}
          onPhoneNumberChange={handePhoneNumebrChange}
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
        <InputField
          value={confirmPassword}
          label="Confirm Password"
          placeholder="Confirm Password"
          onChangeText={handleConfirmPasswordChange}
          keyboardType={'default'}
          isPasswordInput={true}
          error={confirmPasswordError}
        />

        <CheckBox
          containerStyle={{marginVertical: dimensions.margin.medium}}
          checked={isTermsAccepted}
          onValueChange={toggleIsTermAcceptedChange}
          text={'Terms and Conditions'}
        />

        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Register"
          onPress={register}
          type={'primary'}
        />

        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginVertical: dimensions.margin.medium,
          }}>
          Alread Have an account{' '}
          <Text
            onPress={login}
            style={{
              color: colors.activeBorder,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            Login
          </Text>
        </Text>

        <Text
          style={{
            alignSelf: 'center',
            marginVertical: dimensions.margin.small,
          }}>
          Or
        </Text>

        <Separator
          showTransparent
          showVertical
          height={dimensions.margin.small}
        />
        <SocialLoginsOptions setSpinnerLoading={() => {}} disabled={false} />
      </ScrollView>
    </AppBackground>
  );
};

export default SignUpScreen;
