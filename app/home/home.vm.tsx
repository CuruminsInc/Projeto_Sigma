import {useNavigation} from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';


const useHome = () => {
  const navigation = useNavigation<StackTypes>();


  const goUser = async () => {
    navigation.navigate('User')
  }

  return {
    goUser
  };
};

export default useHome;