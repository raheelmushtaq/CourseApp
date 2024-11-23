import {useState} from 'react';
import useNavigationController from '../../../navigation/useNavigationUtils';
import {ScreenName} from '../../../constants/constants.screens';

const useContoller = () => {
  const {navigateTo, goBack} = useNavigationController();
  const [code, setCode] = useState<string>('');

  const [codeError, setCodeError] = useState<string>('');

  const handeCodeChagne = (text: string) => {
    if (codeError) {
      setCodeError('');
    }
    setCode(text);
  };
  0;
  const submit = () => {
    goBack();
    navigateTo(ScreenName.Auth.resetPassword);
  };
  const resendCode = () => {};

  return {
    code,
    codeError,
    handeCodeChagne,
    submit,
    resendCode,
  };
};

export default useContoller;
