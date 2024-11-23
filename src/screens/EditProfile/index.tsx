import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';

import useContoller from './controller';
import InputField from '../../../ui-kit/src/components/InputField';
import {Button, dimensions} from '../../../ui-kit';
import AppBackground from '../../../ui-kit/src/components/RootView/AppBackground';
import PhoneNumberField from '../../../ui-kit/src/components/PhoneNumberField';

const EditProfile = () => {
  const {
    name,
    email,
    countryCode,
    phoneNumber,
    nameError,
    emailError,
    phoneNumberError,
    handleNameChange,
    handleEmailChange,
    handleCountryCode,
    handePhoneNumebrChange,
    updateProfile,
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

        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Save"
          onPress={updateProfile}
          type={'primary'}
        />
      </ScrollView>
    </AppBackground>
  );
};

export default EditProfile;
