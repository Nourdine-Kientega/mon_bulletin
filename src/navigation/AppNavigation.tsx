
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
    </Stack.Navigator>
  )
}

export default AppNavigation;