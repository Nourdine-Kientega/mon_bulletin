import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types';
import { validateEmail, validatePassword } from '../utils/formValitor';
import FormField from '../components/FormField';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      console.log('Données de connexion :', { email, password });
      // navigation.replace('BottomTabs');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Se connecter</Text>

      {/* Email Input */}
      <FormField
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        leftIcon={<Ionicons name="mail-outline" size={20} color="gray" />}
        error={errors.email}
      />

      {/* Password Input */}
      <FormField
        placeholder="Mot de passe"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} color="gray" />}
        error={errors.password}
        rightIcon={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        }
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomText} onPress={() => navigation.replace('Signup')}>
        <Text>Pas encore de compte ? </Text>
        <Text style={{ color: '#007AFF' }}>Créez-en un</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomText} onPress={() => navigation.replace('BottomTabs')}>
        <Text style={{ color: 'gray' }}>Continuer sans se connecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#27AE60',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
