import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import AppBackground from '../../../ui-kit/src/components/RootView/AppBackground';
import useContoller from './controller';
import {Button, Separator} from '../../../ui-kit';
import {styles} from './styles';
import {images} from '../../assets/images';
import CardView from '../../../ui-kit/src/components/CardView';
import TouchableComponent from '../../../ui-kit/src/components/Touchable';

const Settings: React.FC = () => {
  const {
    isLoading,
    navigateToChangePassoword,
    logout,
    userEmail,
    userName,
    userPhone,
    navigateToEditProfile,
  } = useContoller();

  const renderUserProfile = (title: string, value: string) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.itemDetailDescription, {flex: 1}]}>{title}:</Text>
        <Text style={[styles.itemDetailDescription, {flex: 2}]}>{value}</Text>
      </View>
    );
  };
  return (
    <AppBackground
      title={'Settings'}
      showLoader={isLoading}
      showRightIcon={false}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <CardView>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.itemDetailTitle, {flex: 1}]}>Profile</Text>
              <TouchableComponent onPress={navigateToEditProfile}>
                <Image source={images.edit} style={{height: 15, width: 15}} />
              </TouchableComponent>
            </View>
            <Separator showTransparent showVertical />
            {renderUserProfile('Name', userName)}
            <Separator showTransparent showVertical />
            {renderUserProfile('Email', userEmail)}
            <Separator showTransparent showVertical />
            {renderUserProfile('Phone', userPhone)}
          </View>
        </CardView>
        <Button
          title="Change Password"
          type={'primary'}
          onPress={navigateToChangePassoword}
        />
        <Button title="Logout" type={'secondary'} onPress={logout} />
      </ScrollView>
    </AppBackground>
  );
};

export default Settings;
