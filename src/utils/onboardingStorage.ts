import AsyncStorage from '@react-native-async-storage/async-storage';

const setOnboardingStorageItem = async (key: string, value: string) => {

    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error storing onboarder value', error);
    }
};

const getOnboardingStorageItem = async (key: string) => {

    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('Error to get onboarder key', error);
    }
};

const removeOnboardingStorageItem = async (key: string) => {

    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error to remove onboarder key', error);
    }
};

export { setOnboardingStorageItem, getOnboardingStorageItem, removeOnboardingStorageItem };