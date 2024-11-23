import {FlatList, Image, Pressable, Text, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import {images} from '../../assets/images';
import {dimensions} from '../../theme/dimensions';
import InputField from '../InputField';
import TouchableComponent from '../Touchable';
import CountryCodePicker from '../CountryCodePicker';
import Separator from '../Separator';

type PhoneNumberFieldProps = {
  onCodeSelected: (dial_code: string) => void;
  phoneNumber: string;
  phoneNumberError?: string;
  onPhoneNumberChange: (text: string) => void;
};
const PhoneNumberField = ({
  onCodeSelected = (dial_code: string) => {},
  phoneNumber,
  phoneNumberError,
  onPhoneNumberChange,
}: PhoneNumberFieldProps) => {
  return (
    <View
      style={[styles.row, {justifyContent: 'center', alignContent: 'center'}]}>
      <CountryCodePicker
        codeStyle={{flex: 1.4}}
        onValueSelected={onCodeSelected}
      />
      <View style={{flex: 3, marginStart: 5}}>
        <InputField
          value={phoneNumber}
          label="Phone Number"
          placeholder="Phone Number"
          isPasswordInput={false}
          onChangeText={onPhoneNumberChange}
          keyboardType={'number-pad'}
          error={phoneNumberError}
        />
      </View>
    </View>
  );
};

export default PhoneNumberField;
