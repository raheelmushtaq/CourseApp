import {useState} from 'react';
import {CourseType} from '../../types/CourseType';
import useUserStore from '../../store/useUserStore';
import useNavigationController from '../../navigation/useNavigationUtils';
import {ScreenName} from '../../constants/constants.screens';

const useContoller = () => {
  const {navigateTo, goBack} = useNavigationController();
  const {updateUserLoginStatus, name, email, phoneNumber, phoneCode} =
    useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const {logout} = useUserStore();

  const navigateToChangePassoword = () => {
    navigateTo(ScreenName.Auth.resetPassword);
  };

  const navigateToEditProfile = () => {
    navigateTo(ScreenName.editProfile);
  };
  const logoutUser = () => {
    logout();
  };

  return {
    isLoading,
    userName: name,
    userEmail: email,
    userPhone: phoneCode + phoneNumber,
    navigateToChangePassoword,
    logout,
    navigateToEditProfile,
  };
};

export default useContoller;
