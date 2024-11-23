import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScreenName} from '../../../constants/constants.screens';
import useNavigationController from '../../../navigation/useNavigationUtils';
import useUserStore from '../../../store/useUserStore';

const useContoller = () => {
  const {updateUserLoginStatus} = useUserStore();
  const {navigateTo, goBack} = useNavigationController();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isTermsAccepted, setIsTermAccepted] = useState<boolean>(false);

  const [nameError, setNamError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const handleNameChange = (text: string) => {
    if (nameError) {
      setNamError('');
    }
    setName(text);
  };
  const handleEmailChange = (text: string) => {
    if (emailError) {
      setEmailError('');
    }
    setEmail(text);
  };
  const handleCountryCode = (text: string) => {
    setCountryCode(text);
  };

  const handePhoneNumebrChange = (text: string) => {
    if (phoneNumberError) {
      setPhoneNumberError('');
    }
    setPhoneNumber(text);
  };

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

  const toggleIsTermAcceptedChange = (value: boolean) => {
    setIsTermAccepted(value);
  };

  const login = () => {
    goBack();
  };
  const register = () => {
    updateUserLoginStatus(true);
  };

  return {
    name,
    email,
    countryCode,
    phoneNumber,
    password,
    confirmPassword,
    isTermsAccepted,
    nameError,
    emailError,
    phoneNumberError,
    passwordError,
    confirmPasswordError,
    handleNameChange,
    handleEmailChange,
    handleCountryCode,
    handePhoneNumebrChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    toggleIsTermAcceptedChange,
    login,
    register,
  };
};

export default useContoller;
