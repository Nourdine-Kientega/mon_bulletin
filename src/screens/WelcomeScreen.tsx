import { Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { setOnboardingStorageItem } from '../utils/onboardingStorage';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {

  const handleStart = async () => {
    await setOnboardingStorageItem('onboarded', '1');
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/welcome.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bienvenue sur Mon Bulletin</Text>
      <Text style={styles.description}>
        Calcule facilement tes moyennes, sauvegarde tes notes de classe et garde une trace de tes résultats scolaires.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>🚀 Commencer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: 400,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#27AE60',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;