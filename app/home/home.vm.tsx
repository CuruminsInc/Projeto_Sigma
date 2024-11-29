import {useNavigation} from '@react-navigation/native';
import { StackTypes } from '../StackNavigation';


const useHome = () => {
  const navigation = useNavigation<StackTypes>();


  const goUser = async (type:string) => {
    navigation.navigate('User', { type }); // Garantindo que type seja um objeto
  };

  return {
    goUser
  };
};

export default useHome;