import * as React from 'react';
import {useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../constants/constants.screens';
import useGeneralStore from '../store/useGeneralStore';
import OnBoardingScreen from '../screens/onboarding/OnBoarding';
import useUserStore from '../store/useUserStore';
import SigninScreen from '../screens/auth/SigninScreen';
import WebViewScreen from '../screens/WebViewScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/auth/OtpVerificationScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import SignUpScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CourseDetail from '../screens/CourseDetail';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';

export const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const routeNameRef = useRef<string>();

  const {isOnBoardingViewed} = useGeneralStore();

  const {isUserLoggedIn} = useUserStore();
  const onStateChange = (state: any) => {
    if (__DEV__) {
      // const previousRouteName = routeNameRef.current;
      // const {name, params} = navigationRef?.current?.getCurrentRoute?.() || {};
      // if (previousRouteName !== name) {
      //   console.log({previousRouteName, name});
      // }
      // routeNameRef.current = name;
    }
  };

  const onReady = () => {};
  return (
    <NavigationContainer
      // ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <>
          {!isOnBoardingViewed ? (
            <Stack.Screen
              name="OnBoarding"
              component={OnBoardingScreen}
              options={{headerShown: false}}
            />
          ) : !isUserLoggedIn ? (
            <>
              <Stack.Screen
                name={ScreenName.Auth.signin}
                component={SigninScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
              <Stack.Screen
                name={ScreenName.Auth.signup}
                component={SignUpScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
              <Stack.Screen
                name={ScreenName.Auth.forgotPassword}
                component={ForgotPasswordScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
              <Stack.Screen
                name={ScreenName.Auth.otpVerification}
                component={OtpVerificationScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />

              <Stack.Screen
                name={ScreenName.Auth.resetPassword}
                component={ResetPasswordScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={ScreenName.home}
                component={HomeScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
              <Stack.Screen
                name={ScreenName.courseDetail}
                component={CourseDetail}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
              <Stack.Screen
                name={ScreenName.settings}
                component={Settings}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />

              <Stack.Screen
                name={ScreenName.Auth.resetPassword}
                component={ResetPasswordScreen}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />

              <Stack.Screen
                name={ScreenName.editProfile}
                component={EditProfile}
                options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
              />
            </>
          )}

          <Stack.Screen
            name={ScreenName.webview}
            component={WebViewScreen}
            options={{headerBackTitle: 'Back', headerShown: true}} // Custom back button label
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
