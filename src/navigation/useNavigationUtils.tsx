// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import { RootStackParamList } from '../types/RootStackParamList';

// const useNavigationController = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const goBack = () => {
//     navigation.goBack();
//   };
//   const navigateTo = (
//     route: keyof RootStackParamList,
//     params?: RootStackParamList[keyof RootStackParamList],
//   ) => {
//     navigation.navigate(route, params);
//   };

//   return {goBack, navigateTo};
// };

import {useNavigation} from '@react-navigation/native';

const useNavigationController = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const navigateTo = (route: string, params?: object) => {
    navigation.navigate(route, params);
  };

  return {goBack, navigateTo};
};

export default useNavigationController;
