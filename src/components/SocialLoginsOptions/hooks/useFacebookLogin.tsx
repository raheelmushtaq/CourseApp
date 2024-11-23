import SocialButtonWrapper from '../SocialButtonWrapperComponent';
import React, {useMemo} from 'react';
// import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';
// import auth from '@react-native-firebase/auth';
import {Alert, ImageStyle, ViewStyle} from 'react-native';
import {images} from '../../../assets/images';

type useFacebookLoginProps = {
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  disabled: boolean;
  setSpinnerLoading: (value: boolean) => void;
};
const useFacebookLogin = ({
  imageStyle,
  containerStyle,
  disabled,
  setSpinnerLoading,
}: useFacebookLoginProps) => {
  async function onFacebookButtonPress() {
    // LoginManager.logOut();
    // const result = await LoginManager.logInWithPermissions([
    //   'public_profile',
    //   'email',
    // ]);
    // if (result.isCancelled) {
    //   throw 'User cancelled the login process';
    // }
    // const data = await AccessToken.getCurrentAccessToken();
    // if (!data) {
    //   Alert.alert('Error', 'Something went wrong obtaining access token');
    //   throw 'Something went wrong obtaining access token';
    // }
    // setSpinnerLoading(true);
    // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   data.accessToken,
    // );
    // // Sign-in the user with the credential
    // await auth()
    //   .signInWithCredential(facebookCredential)
    //   .then(async user => {
    //     const {additionalUserInfo: {profile = {}} = {}} = user || {};
    //     const {name = '', email = ''} = profile ?? {};
    //     const facebookUserInfo = {
    //       email,
    //       fullName: name,
    //       profileName: makeProfileName(name),
    //       idToken: data.accessToken,
    //       registerType: ACCOUNT_TYPES.FACEBOOK,
    //     };
    //     return await fbLogin(
    //       {email, idToken: data.accessToken},
    //       facebookUserInfo,
    //     );
    //   })
    //   .catch(err => {
    //     logToConsole({err});
    //     setSpinnerLoading(false);
    //     Alert.alert(
    //       'Account Exists with email address',
    //       'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
    //     );
    //   });
  }

  //   //Api Call to login/signup user
  //   const fbLogin = async (params, info) => {
  //     const response = await facebookLoginApiCall(params);
  //     setSpinnerLoading(false);
  //     const {ok = false, status = 0} = response ?? {};
  //     if (ok && API_STATUS.SUCCESS.includes(String(status))) {
  //       return handleLoginSuccessStateManagement(response, dispatch);
  //     }
  //     if (!ok && API_STATUS.BAD_REQUEST.includes(String(status))) {
  //       return showAlert({
  //         title: APP_STRINGS.EVENPLE_LG,
  //         message:
  //           'Invalid credentials provided. Try logging in with different option.',
  //         isLeft: false,
  //         rightText: APP_STRINGS.OKAY,
  //         translation: t,
  //       });
  //     }
  //     if (!ok && status === 403) {
  //       const verifyEmailApiResponse = await verifyEmailApiCall({
  //         email: params.email,
  //       });
  //       if (!verifyEmailApiResponse.ok && verifyEmailApiResponse.data.message) {
  //         return Alert.alert(
  //           t(APP_STRINGS.ALERT),
  //           verifyEmailApiResponse.data.message,
  //         );
  //       }
  //       return openAgeConsentDialog(info); //open age consent dialog if new user
  //     }
  //   };

  //   const getUserInfo = async () => {
  //     return await Profile.getCurrentProfile();
  //   };

  const renderFacebookButtonJSX = useMemo(() => {
    return (
      <SocialButtonWrapper
        onPress={onFacebookButtonPress}
        imageName={images.facebook}
        disabled={disabled}
        containerStyle={containerStyle}
        imageStyle={imageStyle}
      />
    );
  }, [disabled, onFacebookButtonPress]);

  return {
    renderFacebookButtonJSX,
    // getUserInfo,
    onFacebookButtonPress,
    // renderApiErrorModal,
    // renderVerifyEmailErrorModal,
  };
};
export default useFacebookLogin;
