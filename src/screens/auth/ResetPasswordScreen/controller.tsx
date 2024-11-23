import {useState} from 'react';
import useNavigationController from '../../../navigation/useNavigationUtils';
import AppStrings from '../../../constants/constants.strings';
import {ScreenName} from '../../../constants/constants.screens';
import useUserStore from '../../../store/useUserStore';

const useContoller = () => {
  const {isUserLoggedIn} = useUserStore();
  const {navigateTo, goBack} = useNavigationController();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const handlePasswordChange = (text: string) => {
    if (passwordError) {
      setPasswordError('');
    }
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text: string) => {
    if (confirmPasswordError) {
      setConfirmPasswordError('');
    }
    setConfirmPassword(text);
  };

  const submit = () => {
    if (!isUserLoggedIn) goBack();
    goBack();
  };

  return {
    isUserLoggedIn,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
    handlePasswordChange,
    handleConfirmPasswordChange,
    submit,
  };
};

export default useContoller;
