import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScreenName} from '../../../constants/constants.screens';
import useNavigationController from '../../../navigation/useNavigationUtils';
import useUserStore from '../../../store/useUserStore';

const useContoller = () => {
  const {updateUserLoginStatus} = useUserStore();

  const {navigateTo} = useNavigationController();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleEmailChange = (text: string) => {
    if (emailError) {
      setEmailError('');
    }
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    if (passwordError) {
      setPasswordError('');
    }
    setPassword(text);
  };

  const validateLogin = () => {
    updateUserLoginStatus(true);
  };
  const openRegisteration = () => {
    navigateTo(ScreenName.Auth.signup);
  };
  const openForgotPassword = () => {
    navigateTo(ScreenName.Auth.forgotPassword);
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    validateLogin,
    openRegisteration,
    openForgotPassword,
  };
};

export default useContoller;
