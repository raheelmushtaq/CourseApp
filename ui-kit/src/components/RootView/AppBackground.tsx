import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  Platform,
  Image,
  ImageProps,
} from 'react-native';
import styles from './styles';
import {colors} from '../../theme/colors';
import {dimensions} from '../../theme/dimensions';
import {CustomerLoader} from '../Loader/CustomLoader';
import TouchableComponent from '../Touchable';
import ScreenLoader from '../Loader/ScreenLoader';
import {useNavigation} from '@react-navigation/native';

export type RightIconType = {
  icon: ImageProps;
  title?: string;
  onPress: () => void;
};
type AppBackgroundProps = {
  children: React.ReactNode;
  showLoader?: boolean;
  showLoaderAsModal?: boolean;
  title: string;
  rightIconList?: RightIconType[];
  isKeyBoardAwareScrollView?: boolean;
  isSafeAreaView?: boolean;
  isWebView?: boolean;
  isScrollEnabled?: boolean;
  extraScrollHeight?: number;
  background?: string;
  showRightIcon?: boolean;
};
const AppBackground = ({
  children,
  showLoader,
  showLoaderAsModal = true,
  title,
  rightIconList = [],
  showRightIcon = true,
  isKeyBoardAwareScrollView = false,
  isSafeAreaView = true,
  isWebView = false,
  isScrollEnabled = true,
  background = colors.background,
}: AppBackgroundProps) => {
  const navigation = useNavigation();
  const renderRightIcon = (onPress: () => void, icon: ImageProps) => {
    return (
      <TouchableComponent
        onPress={onPress}
        containerStyle={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={icon} style={{width: 20, height: 20}} />
      </TouchableComponent>
    );
  };
  const handleUserActions = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerStyle: {
        borderBottomColor: colors.blackOverlay,
        borderBottomWidth: 0.5,
      },
      headerTintColor: colors.textPrimary,
      headerRight: () => {
        if (showRightIcon) {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              {rightIconList.length > 0 &&
                rightIconList.map(item =>
                  renderRightIcon(item.onPress, item.icon),
                )}
            </View>
          );
        } else {
          return null;
        }
      },
    });
  }, []);

  const isAndroid = Platform.OS !== 'android';
  const parentViewExtraScrollHeight = !isAndroid
    ? dimensions.SCREEN_HEIGHT * 0.15
    : 0;

  const getSafeAreaWrapper = (isSafeAreaView = false) => {
    if (isSafeAreaView) {
      return SafeAreaView;
    }
    return View;
  };

  const getScreenWrapper = (isKeyBoardAwareScrollView = false) => {
    // if (isKeyBoardAwareScrollView) {
    //     return KeyboardAwareScrollView;
    // }
    return View;
  };

  const getTouchableWrapper = (isWebView = false) => {
    if (isWebView) {
      return View;
    }
    return TouchableWithoutFeedback;
  };
  const ScreenWrapper = getScreenWrapper(isKeyBoardAwareScrollView);
  const TouchableWrapper = getTouchableWrapper(isWebView);

  return (
    <SafeAreaView style={styles.picture}>
      <StatusBar translucent={true} backgroundColor={background} />
      <TouchableWrapper
        style={isWebView && {flex: 1}}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <ScreenWrapper
          enableOnAndroid={true}
          enableResetScrollToCoords={true}
          keyboardShouldPersistTaps="handled"
          extraHeight={parentViewExtraScrollHeight}
          extraScrollHeight={parentViewExtraScrollHeight}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          // keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
          isScrollEnabled={isScrollEnabled}
          style={[
            styles.picture,
            !isKeyBoardAwareScrollView
              ? {
                  paddingBottom: isAndroid ? 20 : 0,
                }
              : {paddingBottom: isAndroid ? 20 : 0},
          ]}
          contentContainerStyle={[
            {flexGrow: 1, paddingBottom: isAndroid ? 20 : 0},
          ]}>
          {showLoader && !showLoaderAsModal && (
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <CustomerLoader />
            </View>
          )}
          {children}
        </ScreenWrapper>
      </TouchableWrapper>
      {showLoader && showLoaderAsModal && (
        <ScreenLoader isVisible={showLoader} />
      )}
    </SafeAreaView>
  );
};
export default AppBackground;
