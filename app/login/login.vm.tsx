import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import { StackTypes } from '../StackNavigation';


const useLogin = () => {
  const navigation = useNavigation<StackTypes>();

  const goSignUp = async () =>{
    navigation.navigate('Sign_Up')
  }

  return {
    goSignUp
  };
};

export default useLogin;