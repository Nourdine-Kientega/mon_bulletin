import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import OnboardingScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import { getOnboardingStorageItem } from '../utils/onboardingStorage';
import BottomTabs from './BottomTabs';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

    const isAlreadyOnboarded = async () => {
        const onboarded = await getOnboardingStorageItem('onboarded');

        if (onboarded === '1') {
            setShowOnboarding(false);
        } else {
            setShowOnboarding(true);
        }
    };

    useEffect(() => { // Verify onboarding state
        isAlreadyOnboarded();
    }, []);

    if (showOnboarding === null) {
        return null;
    }

    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={showOnboarding ? 'Welcome' : 'HomeScreen'} >
                <Stack.Screen name='Welcome' component={OnboardingScreen} />
                <Stack.Screen name='HomeScreen' component={BottomTabs} />
            </Stack.Navigator>
        </>
    )
}

export default AppNavigation;