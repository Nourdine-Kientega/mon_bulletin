// import { useNavigation } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import { getItem, removeItem } from '../utils/asyncStorage';

const HomeScreen = () => {
    const navigation = useNavigation<any>();

    const resetOnboarding = async () => {

        await removeItem('onboarded');
        navigation.push('Onboarding');
    };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'} />
        <LottieView style={styles.lottie} source={require('../assets/animations/celebration.json')} autoPlay loop />
        <Text style={styles.title}>Home Page</Text>
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
        marginTop: 50,
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
})

export default HomeScreen;