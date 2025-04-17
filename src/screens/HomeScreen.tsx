import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { removeOnboardingStorageItem } from '../utils/onboardingStorage';
import { RootStackParamList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {

    const resetOnboarding = async () => {

        await removeOnboardingStorageItem('onboarded');
        navigation.push('Welcome');
    };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <TouchableOpacity style={styles.resetButton} onPress={resetOnboarding}>
            <Text>Reset</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // marginTop: 50,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    lottie: {
        width: 300,
        height: 400,
    },
    title: {
        fontSize: 32,
    },
    resetButton: {
        backgroundColor: '#34d399',
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
    }
});

export default HomeScreen;