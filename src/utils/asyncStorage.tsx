import AsyncStorage from '@react-native-async-storage/async-storage';


export const setItem= async (key: string, value: string) => {

    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error storing onboarder value', error);
    }

};

export const getItem = async (key: string) => {

    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('Error to get onboarder key', error);
    }

};

export const removeItem = async (key: string) => {

    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error to remove onboarder key', error);
    }

};

