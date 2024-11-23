import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import {images} from '../theme/images';
// import SocialButtonWrapper from '../components/SocialButtonWrapperComponent';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import ApiService from '../apiclient/ApiService';
import {Alert, ImageStyle, ViewStyle} from 'react-native';
import SocialButtonWrapper from '../SocialButtonWrapperComponent';
import {images} from '../../../assets/images';
// import {useDispatch} from 'react-redux';
// import {ACCOUNT_TYPES, APP_STRINGS} from '../constants';
// import {makeProfileName, showAlert} from '../utils/sharedUtils';
// import {REQUEST_METHOD, useApiWrapper} from '../apiclient/useApiWrapper';
// import {logToConsole} from '../configs/ReactotronConfig';
// import {useTranslation} from "react-i18next";
// import {handleLoginSuccessStateManagement} from "../utils/authModuleSharedUtils";
// import ApiDialogBox from "../components/ApiDialogBox";
// import SocialLoginAdditionInformation from "../components/SocialLoginAdditionInformation";

type useGoogleLoginProps = {
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  disabled: boolean;
  setSpinnerLoading: (value: boolean) => void;
};
const useGoogleLogin = ({
  imageStyle,
  containerStyle,
  disabled,
  setSpinnerLoading,
}: useGoogleLoginProps) => {
  const [userInfo, setUserInfoState] = useState(undefined);
  // const {onCallApi: onCallGoogleLoginApi} = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.socialAuthLogin,
  //     withError: false
  // });
  // const {onCallApi: onCallGoogleRegisterApi, renderErrorModalJSX: renderRegisterApiErrorModal} = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.socialAuthRegister,
  //     withError: true
  // });
  // const {onCallApi: verifyEmailApiCall, renderErrorModalJSX: renderVerifyEmailErrorModal} = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.findEmail,
  //     withRefresh: false,
  // });

  const [apiDialogBoxError, setApiDialogBoxError] = useState('');
  const [apiDialogBoxUser, setApiDialogBoxUser] = useState('');
  const [isApiErroDialogVisible, setIsApiErroDialogVisible] = useState(false);

  //   const renderGoogleInformationInCompleteDialog = React.useMemo(() => {
  //     if (isApiErroDialogVisible) {
  //       return (
  //         <ApiDialogBox
  //           message={apiDialogBoxError}
  //           isSingleButton={true}
  //           onConfirmPress={() => {
  //             setIsApiErroDialogVisible(false);
  //             setTimeout(() => {
  //               if (!!apiDialogBoxUser) {
  //                 handleLoginSuccessStateManagement(apiDialogBoxUser, dispatch);
  //                 setApiDialogBoxUser(null);
  //                 setApiDialogBoxError(null);
  //               }
  //             }, 300);
  //           }}
  //           visible={isApiErroDialogVisible}
  //         />
  //       );
  //     }
  //     return null;
  //   }, [isApiErroDialogVisible, apiDialogBoxError, apiDialogBoxUser]);
  //   const dispatch = useDispatch();

  const googleLoginApiCall = async () => {
    // setSpinnerLoading(true);
    // const data = {email: user.email, registerType: user.registerType};
    // const loginResponse = await onCallGoogleLoginApi(data);
    // setSpinnerLoading(false);
    // const {success, user: userResponse, message} = loginResponse || {};
    // if (success) {
    //   setTimeout(() => {
    //     handleLoginSuccessStateManagement(loginResponse, dispatch);
    //   }, 300);
    // } else {
    //   setTimeout(() => {
    //     if (!!userResponse) {
    //       if (userResponse.registerType === ACCOUNT_TYPES.GOOGLE) {
    //         handleLoginSuccessStateManagement(loginResponse, dispatch);
    //       } else {
    //         setIsApiErroDialogVisible(true);
    //         setApiDialogBoxUser(null);
    //         setApiDialogBoxError(message);
    //       }
    //     } else {
    //       setUserInfoState(user);
    //     }
    //   }, 300);
    // }
  };
  //   const googleRegisterApiCall = async (idToken, apiUser) => {
  // setSpinnerLoading(true);
  // const data = {idToken, ...apiUser};
  // const loginResponse = await onCallGoogleRegisterApi(data);
  // setSpinnerLoading(false);
  // const {success, user: userResponse, message} = loginResponse || {};
  // setUserInfoState(null);
  // if (success) {
  //   setTimeout(() => {
  //     handleLoginSuccessStateManagement(loginResponse, dispatch);
  //   }, 500);
  // } else {
  //   setTimeout(() => {
  //     if (userResponse && message) {
  //       setApiDialogBoxError(message);
  //       setApiDialogBoxUser(loginResponse);
  //       setIsApiErroDialogVisible(true);
  //     } else {
  //     }
  //   }, 300);
  // }
  //   };

  const googleSignIn = async () => {
    // try {
    //   await GoogleSignin.signOut();
    //   const {idToken} = await GoogleSignin.signIn();
    //   const googleCredential = await auth.GoogleAuthProvider.credential(
    //     idToken,
    //   );
    //   setSpinnerLoading(true);
    //   let googleUser;
    //   await auth()
    //     .signInWithCredential(googleCredential)
    //     .then(user => {
    //       googleUser = user;
    //     })
    //     .catch(e => {
    //       logToConsole({exception: e});
    //       setSpinnerLoading(false);
    //       Alert.alert(
    //         'Account Exists with this email address',
    //         'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
    //       );
    //     });
    //   const {additionalUserInfo: {profile = {}} = {}} = googleUser ?? {};
    //   setSpinnerLoading(false);
    //   const {email = '', name, picture = ''} = profile ?? {};
    //   const profileName = makeProfileName(name);
    //   const googleUserInfo = {
    //     email,
    //     firstName: profileName.firstName,
    //     lastName: profileName.lastName,
    //     // profileName: makeProfileName(name),
    //     idToken,
    //     registerType: ACCOUNT_TYPES.GOOGLE,
    //   };
    //   googleLoginApiCall(googleUserInfo);
    // } catch (e) {
    //   logToConsole({mainException: e});
    //   if (e?.message === 'NETWORK_ERROR') {
    //     showAlert({
    //       title: t(APP_STRINGS.INTERNET_ERROR_MESSAGE),
    //       translation: t,
    //     });
    //   }
    // }
  };
  //   const onSubmitUser = async user => {
  //     await googleRegisterApiCall(user.idToken, user);
  //   };

  //   const onBack = async () => {
  //     setUserInfoState('');
  //   };

  const renderGoogleButtonJSX = React.useMemo(() => {
    return (
      <>
        <SocialButtonWrapper
          imageName={images.google}
          onPress={googleSignIn}
          containerStyle={containerStyle}
          disabled={disabled}
          imageStyle={imageStyle}
        />
        {/* <SocialLoginAdditionInformation
          isVisible={!!userInfo}
          Email={userInfo?.email ?? ''}
          FirstName={userInfo?.firstName ?? ''}
          LastName={userInfo?.lastName ?? ''}
          IdToken={userInfo?.idToken ?? ''}
          RegisterType={userInfo?.registerType ?? ''}
          onSubmit={onSubmitUser}
          onBack={onBack}
        /> */}
      </>
    );
  }, [containerStyle, disabled, imageStyle, userInfo]);

  return {
    renderGoogleButtonJSX,
    userInfo,
    // renderRegisterApiErrorModal: renderRegisterApiErrorModal,
    // renderGoogleInformationInCompleteDialog,
    // renderVerifyEmailErrorModal,
  };
};
export default useGoogleLogin;
