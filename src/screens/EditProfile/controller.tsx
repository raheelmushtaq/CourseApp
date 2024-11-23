import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScreenName} from '../../constants/constants.screens';
import useNavigationController from '../../navigation/useNavigationUtils';
import useUserStore from '../../store/useUserStore';

const useContoller = () => {
  const {
    updateUserLoginStatus,
    name: userName,
    email: userEmail,
    phoneCode: userPhoneCode,
    phoneNumber: userPhoneNumber,
  } = useUserStore();
  const {navigateTo, goBack} = useNavigationController();
  const [name, setName] = useState<string>(userName);
  const [email, setEmail] = useState<string>(userEmail);
  const [countryCode, setCountryCode] = useState<string>(userPhoneCode);
  const [phoneNumber, setPhoneNumber] = useState<string>(userPhoneNumber);

  const [nameError, setNamError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');

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

  const login = () => {
    goBack();
  };
  const updateProfile = () => {
    updateUserLoginStatus(true);
    goBack();
  };

  return {
    name,
    email,
    countryCode,
    phoneNumber,
    nameError,
    emailError,
    phoneNumberError,
    handleNameChange,
    handleEmailChange,
    handleCountryCode,
    handePhoneNumebrChange,
    updateProfile,
  };
};

export default useContoller;
