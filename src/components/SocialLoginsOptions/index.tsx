import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {isIOS} from '../../../ui-kit';
import useGoogleLogin from './hooks/useGoogleLogin';
import useAppleLogin from './hooks/useAppleLogin';
import useFacebookLogin from './hooks/useFacebookLogin';

// import {isIos} from '../../constants';
// import useAppleLogin from '../../hooks/useAppleLogin';
// import useGoogleLogin from '../../hooks/useGoogleLogin';
// import useFacebookLogin from '../../hooks/useFacebookLogin';
// import {getMetricsMod} from '../../theme/metrics';
// import DialogBox from '../DialogBox';
// import {openLink} from '../../Utils/inAppBrowserUtil';
// import {navigateTo} from '../../utils/navigationUtils';
// import ApiService from '../../apiclient/ApiService';

type SocialLoginsOptionsProps = {
  setSpinnerLoading: (value: boolean) => void;
  disabled: boolean;
};
const SocialLoginsOptions = ({
  setSpinnerLoading,
  disabled,
}: SocialLoginsOptionsProps) => {
  const [isVisibleAgeConsentDialog, setIsVisibleAgeConsentDialog] =
    useState(false);
  const [socialLoginUserInfo, setSocialLoginUserInfo] = useState({});

  const openAgeConsentDialog = useCallback(
    () => {},
    [],
    //     signupInfo => {
    //       setIsVisibleAgeConsentDialog(true);
    //       setSocialLoginUserInfo(signupInfo);
    //     },
    //     [socialLoginUserInfo],
  );
  const closeAgeConsentDialog = useCallback(
    () => setIsVisibleAgeConsentDialog(false),
    [],
  );

  //Apple Login
  const {
    renderAppleButtonJSX,
    //   renderRegisterApiErrorModal: renderAppleLoginApiErrorModal,
    //   renderAppleInformationInCompleteDialog,
  } = useAppleLogin({
    setSpinnerLoading: setSpinnerLoading,
    disabled,
    // openAgeConsentDialog,
    // closeAgeConsentDialog,
  });

  //   //Google Login
  const {
    renderGoogleButtonJSX,
    //   renderRegisterApiErrorModal: renderGoogleLoginApiErrorModal,
    //   renderGoogleInformationInCompleteDialog,
  } = useGoogleLogin({
    setSpinnerLoading,
    disabled,
    // openAgeConsentDialog,
    // closeAgeConsentDialog,
  });

  //Facebook Login
  const {
    renderFacebookButtonJSX,
    //   renderRegisterApiErrorModal: renderFacebookLoginApiErrorModal,
  } = useFacebookLogin({
    setSpinnerLoading,
    disabled,
    //   openAgeConsentDialog,
    //   closeAgeConsentDialog,
  });

  const onOpenLink = useCallback(async (url: string) => {
    // await openLink(url, 'dark-content');
  }, []);

  const openTermsAndCondition = () => {
    // onOpenLink(ApiService.urls.termOfUse).then(r => {});
  };

  const navigateNextForSocialSignups = () => {
    // if (!socialLoginUserInfo.fullName) {
    //   return navigateTo('Signup', {
    //     signupInfo: socialLoginUserInfo,
    //     fromSocial: true,
    //   });
    // }
    // return navigateTo('PhoneNumberScreen', {signupInfo: socialLoginUserInfo});
  };

  return (
    <View style={styles.loginWithOtherOptionsContainer}>
      {renderGoogleButtonJSX}
      {isIOS && <View style={{marginStart: 20}}>{renderAppleButtonJSX}</View>}
      <View style={{marginStart: 20}}>{renderFacebookButtonJSX}</View>
      {/*{renderFacebookLoginApiErrorModal}*/}
      {/* {isIos && renderAppleLoginApiErrorModal} */}
      {/* {renderGoogleLoginApiErrorModal} */}
      {/* {renderGoogleInformationInCompleteDialog} */}
      {/* {isIos && renderAppleInformationInCompleteDialog} */}
      {/*{renderAgeConsentDialog()}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  loginWithOtherOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default SocialLoginsOptions;
