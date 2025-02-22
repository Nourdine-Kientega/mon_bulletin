import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AboutScreen from '../screens/AboutScreen';
import { useEffect, useState } from 'react';
import { getItem } from '../utils/asyncStorage';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null); // Start with null

  const isAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');
    
    if (onboarded === '1') {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  }

  useEffect(() => {
    isAlreadyOnboarded();
  }, []);

  // Don't render anything until showOnboarding has been determined (null state)
  if (showOnboarding === null) {
    return null;  // You can also show a loading screen here if needed
  }


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={showOnboarding ? 'Onboarding' : 'Login'}>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
      <Stack.Screen name='About' component={AboutScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Signup' component={SignupScreen}/>
    </Stack.Navigator>
  );
}

export default AppNavigation;
