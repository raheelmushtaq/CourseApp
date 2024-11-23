import React from 'react';
import {Image, Text, View} from 'react-native';

import useContoller from './controller';
import InputField from '../../../../ui-kit/src/components/InputField';
import {Button, colors, dimensions} from '../../../../ui-kit';
import {images} from '../../../assets/images';
import AppBackground from '../../../../ui-kit/src/components/RootView/AppBackground';
import ConfirmationCodeInput from '../../../../ui-kit/src/components/ConfirmationCodeInput';
import TouchableComponent from '../../../../ui-kit/src/components/Touchable';
import {styles} from './styles';

const OtpVerificationScreen = () => {
  const {code, codeError, handeCodeChagne, submit, resendCode} = useContoller();
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
          A 4 digit code has been send to the given email
        </Text>
        <ConfirmationCodeInput
          value={code}
          cellCount={4}
          setValue={handeCodeChagne}
          errorMessage={codeError}
        />
        <Button
          containerStyle={{marginTop: dimensions.margin.small}}
          title="Submit"
          onPress={submit}
          type={'primary'}
        />

        <View
          style={{
            marginVertical: dimensions.margin.medium,
            marginHorizontal: dimensions.margin.small,
          }}>
          <TouchableComponent onPress={resendCode}>
            <Text style={{alignSelf: 'flex-end', color: colors.activeBorder}}>
              Resend Code
            </Text>
          </TouchableComponent>
        </View>
      </View>
    </AppBackground>
  );
};

export default OtpVerificationScreen;
