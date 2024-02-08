import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../componets1/Button';
import HomeScreen from '../../../screens/HomeScreen';

const FromScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
      }}>
        

        <View style={styles.container}>
      <HomeScreen/>
      
    </View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default FromScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});