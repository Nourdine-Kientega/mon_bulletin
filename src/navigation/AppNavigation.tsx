import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import { getOnboardingStorageItem } from '../utils/onboardingStorage';


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
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={showOnboarding ? 'Onboarding' : 'Home'} >
                <Stack.Screen name='Onboarding' component={OnboardingScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </>
    )
}

export default AppNavigation;