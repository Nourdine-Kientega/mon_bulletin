import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import TabBarComponent from '../components/TabBarComponent';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator 
         screenOptions={{ headerShown: false }}
         tabBar={(props) => <TabBarComponent {...props} />}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabs;