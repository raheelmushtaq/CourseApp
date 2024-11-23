import {useState} from 'react';
import useNavigationController from '../../../navigation/useNavigationUtils';
import AppStrings from '../../../constants/constants.strings';
import {ScreenName} from '../../../constants/constants.screens';

const useContoller = () => {
  const {navigateTo} = useNavigationController();
  const [email, setEmail] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');

  const handleEmailChange = (text: string) => {
    if (emailError) {
      setEmailError('');
    }
    setEmail(text);
  };
  0;
  const forgotPassword = () => {
    navigateTo(ScreenName.Auth.otpVerification);
  };

  return {
    email,
    emailError,
    handleEmailChange,
    forgotPassword,
  };
};

export default useContoller;
