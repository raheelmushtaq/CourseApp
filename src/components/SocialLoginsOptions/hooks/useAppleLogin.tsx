import React, {useMemo, useState} from 'react';
import SocialButtonWrapper from '../SocialButtonWrapperComponent';
import {ImageStyle, ViewStyle} from 'react-native';
import {images} from '../../../assets/images';

type useAppleLoginProps = {
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  disabled: boolean;
  setSpinnerLoading: (value: boolean) => void;
};
const useAppleLogin = ({
  imageStyle,
  containerStyle,
  disabled,
  setSpinnerLoading,
}: useAppleLoginProps) => {
  const [user, setUser] = useState(null);

  //   const {
  //     onCallApi: onCallAppleLoginApi,
  //     renderErrorModalJSX: renderApiErrorModal,
  //   } = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.socialAuthLogin,
  //     withError: false,
  //   });

  //   const {
  //     onCallApi: onCallAppleRegisterApi,
  //     renderErrorModalJSX: renderRegisterApiErrorModal,
  //   } = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.socialAuthRegister,
  //     withError: true,
  //   });

  // const {onCallApi: verifyEmailApiCall, renderErrorModalJSX: renderVerifyEmailErrorModal} = useApiWrapper({
  //     type: REQUEST_METHOD.POST,
  //     endPoint: ApiService.Auth.findEmail,
  //     withRefresh: false,
  // });
  const [apiDialogBoxError, setApiDialogBoxError] = useState('');
  const [apiDialogBoxUser, setApiDialogBoxUser] = useState('');
  const [isApiErroDialogVisible, setIsApiErroDialogVisible] = useState(false);

  // const renderAppleInformationInCompleteDialog = React.useMemo(() => {
  //   if (isApiErroDialogVisible) {
  //     return (
  //       <ApiDialogBox
  //         message={apiDialogBoxError}
  //         isSingleButton={true}
  //         onConfirmPress={() => {
  //           setIsApiErroDialogVisible(false);
  //           setApiDialogBoxUser(null);
  //           setApiDialogBoxError(null);
  //           setTimeout(() => {
  //             if (!!apiDialogBoxUser) {
  //               handleLoginSuccessStateManagement(apiDialogBoxUser, dispatch);
  //             }
  //           }, 300);
  //         }}
  //         visible={isApiErroDialogVisible}
  //       />
  //     );
  //   }
  //   return null;
  // }, [isApiErroDialogVisible, apiDialogBoxError, apiDialogBoxUser]);

  // const {isConnected} = useNetInfo();
  // const dispatch = useDispatch();

  const onAppleButtonPress = async () => {
    // // Start the sign-in request
    // const appleAuthRequestResponse = await appleAuth.performRequest({
    //   requestedOperation: appleAuth.Operation.LOGIN,
    //   requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    // });
    // setSpinnerLoading(true);
    // // Ensure Apple returned a user identityToken
    // if (!appleAuthRequestResponse.identityToken) {
    //   throw new Error('Apple Sign-In failed - no identify token returned');
    // }
    // // Create a Firebase credential from the response
    // const {
    //   identityToken,
    //   nonce,
    //   email = '',
    //   fullName = {},
    // } = appleAuthRequestResponse;
    // const {givenName, familyName} = fullName;
    // const appleCredential = auth.AppleAuthProvider.credential(
    //   identityToken,
    //   nonce,
    // );
    // // Sign the user in with the credential
    // // let appleUser;
    // await auth()
    //   .signInWithCredential(appleCredential)
    //   .then(async user => {
    //     const {additionalUserInfo = {}} = user;
    //     const {
    //       profile: {email: profileEmail = ''},
    //     } = additionalUserInfo;
    //     const name = givenName ? `${givenName} ${familyName}` : '';
    //     const profileName = makeProfileName(name);
    //     const appleUserInfo = {
    //       // email: "cad13151991@gmail.com",
    //       email: email ?? profileEmail,
    //       // fullName: name,
    //       firstName: profileName.firstName,
    //       lastName: profileName.lastName,
    //       // profileName: makeProfileName(name),
    //       idToken: identityToken,
    //       registerType: ACCOUNT_TYPES.APPLE,
    //     };
    //     await appleLoginApiCall(appleUserInfo);
    //     // appleUser = user;
    //   })
    //   .catch(e => {
    //     // Alert.alert(
    //     //     'Account Exists with email address',
    //     //     'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
    //     // );
    //   });
  };

  const appleLoginApiCall = async () => {
    // setSpinnerLoading(true);
    // const data = {email: appleUser.email, registerType: appleUser.registerType};
    // const loginResponse = await onCallAppleLoginApi(data);
    // const {success, user, message} = loginResponse || {};
    // setSpinnerLoading(false);
    // if (success) {
    //   setTimeout(() => {
    //     handleLoginSuccessStateManagement(loginResponse, dispatch);
    //   }, 300);
    // } else {
    //   setTimeout(() => {
    //     if (!!user) {
    //       if (user.registerType === ACCOUNT_TYPES.APPLE) {
    //         handleLoginSuccessStateManagement(loginResponse, dispatch);
    //       } else {
    //         setIsApiErroDialogVisible(true);
    //         setApiDialogBoxUser(null);
    //         setApiDialogBoxError(message);
    //       }
    //     } else {
    //       setUser(appleUser);
    //     }
    //   }, 300);
    // }
  };

  // const appleRegisterApiCall = async (idToken, apiUser) => {
  //   setSpinnerLoading(true);
  //   const data = {idToken, ...apiUser};
  //   const loginResponse = await onCallAppleRegisterApi(data);
  //   setSpinnerLoading(false);
  //   const {success, user: userResponse, message} = loginResponse || {};
  //   setUser(null);
  //   if (success) {
  //     setTimeout(() => {
  //       handleLoginSuccessStateManagement(loginResponse, dispatch);
  //     }, 500);
  //   } else {
  //     setTimeout(() => {
  //       if (userResponse && message) {
  //         setApiDialogBoxError(message);
  //         setApiDialogBoxUser(loginResponse);
  //         setIsApiErroDialogVisible(true);
  //       } else {
  //       }
  //     }, 500);
  //   }
  // // };

  // const onSubmitUser = async user => {
  //   // await appleRegisterApiCall(user.idToken, user);
  // };

  // const onBack = async () => {
  //   setUserInfoState('');
  // };

  const renderAppleButtonJSX = useMemo(() => {
    return (
      <>
        <SocialButtonWrapper
          imageName={images.apple}
          onPress={onAppleButtonPress}
          containerStyle={containerStyle}
          disabled={disabled}
          imageStyle={imageStyle}
        />
        {/* <SocialLoginAdditionInformation
          isVisible={!!user}
          Email={user?.email ?? ''}
          FirstName={user?.firstName ?? ''}
          LastName={user?.lastName ?? ''}
          IdToken={user?.idToken ?? ''}
          RegisterType={user?.registerType ?? ''}
          onSubmit={onSubmitUser}
          onBack={onBack}
        /> */}
      </>
    );
  }, [disabled, onAppleButtonPress]);

  return {
    user,
    renderAppleButtonJSX,
    // renderRegisterApiErrorModal: renderRegisterApiErrorModal,
    // renderAppleInformationInCompleteDialog,
    // renderVerifyEmailErrorModal,
  };
};

export default useAppleLogin;
