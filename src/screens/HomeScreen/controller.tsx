import {useEffect, useState} from 'react';
import {RightIconType} from '../../../ui-kit/src/components/RootView/AppBackground';
import {images} from '../../assets/images';
import {CourseType} from '../../types/CourseType';
import {dummtData} from './consants';
import useNavigationController from '../../navigation/useNavigationUtils';
import {ScreenName} from '../../constants/constants.screens';

const useContoller = () => {
  const {navigateTo} = useNavigationController();
  const rightIconList: RightIconType[] = [
    {
      icon: images.settings,
      onPress: () => {
        navigateTo(ScreenName.settings);
      },
    },
  ];
  const [isLoading, setIsLoading] = useState(false);

  const [searchPropertyText, setSearchPropertyText] = useState('');
  const [filterListOfProperties, setFilteredListOfProperties] =
    useState<CourseType[]>(dummtData);

  useEffect(() => {}, []);
  const onSearchClearText = () => setSearchPropertyText('');
  const onSearchChangeText = (text: string) => {
    setSearchPropertyText(text);
  };
  const navigateToCourseDetail = (item: CourseType) => {
    navigateTo(ScreenName.courseDetail, {item: item});
  };

  return {
    rightIconList,
    isLoading,
    searchPropertyText,
    filterListOfProperties,
    onSearchChangeText,
    onSearchClearText,
    navigateToCourseDetail,
  };
};

export default useContoller;
