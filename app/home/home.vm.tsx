import {useNavigation} from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';


const useHome = () => {
  const navigation = useNavigation<StackTypes>();


  const goUser = async (type:string) => {
    navigation.navigate('User', { type }); 
  };

  const goHistory = async (type:string) => {
    navigation.navigate('History', { type }); 
  };

  return {
    goUser,
    goHistory
  };
};

export default useHome;