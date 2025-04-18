import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FormField from '../components/FormField';
import { validateEmail, validatePassword, validateConfirmPassword, } from '../utils/formValitor';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types';

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string | boolean }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    const newErrors: typeof errors = {};

    // Validation des champs spécifiques
    if (form.firstName.trim() === '') newErrors.firstName = 'Ce champ est requis.';
    if (form.lastName.trim() === '') newErrors.lastName = 'Ce champ est requis.';

    const emailError = validateEmail(form.email);
    if (emailError) newErrors.email = emailError;

    const passError = validatePassword(form.password);
    if (passError) newErrors.password = passError;

    const confirmError = validateConfirmPassword(form.password, form.confirmPassword);
    if (confirmError) newErrors.confirmPassword = confirmError;

    setErrors(newErrors);

    // Si toutes les erreurs sont vides, formulaire valide
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulaire valide :', form);
      // navigation.replace('Login');
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: '' }); // Clear error when typing
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>

      <FormField
        placeholder="Prénom"
        value={form.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
        leftIcon={<Ionicons name="person-outline" size={20} color="gray" />}
        error={errors.firstName} // Only show error when not empty
      />

      <FormField
        placeholder="Nom"
        value={form.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
        leftIcon={<Ionicons name="person-outline" size={20} color="gray" />}
        error={errors.lastName} // Only show error when not empty
      />

      <FormField
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
        leftIcon={<Ionicons name="mail-outline" size={20} color="gray" />}
        error={errors.email}
      />

      <FormField
        placeholder="Mot de passe"
        secureTextEntry={!showPassword}
        value={form.password}
        onChangeText={(text) => handleChange('password', text)}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} color="gray" />}
        rightIcon={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        }
        error={errors.password}
      />

      <FormField
        placeholder="Confirmez le mot de passe"
        secureTextEntry={!showConfirmPassword}
        value={form.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
        leftIcon={<Ionicons name="lock-closed-outline" size={20} color="gray" />}
        rightIcon={
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons
              name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        }
        error={errors.confirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
        // disabled={isFormIncomplete}
      >
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomText} onPress={() => navigation.replace('Login')}>
        <Text>Vous avez déjà un compte ? </Text>
        <Text style={{ color: '#007AFF' }}>Connectez-vous</Text>
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
    justifyContent: 'center',
    marginTop: 24,
    alignItems: 'center',
  },
});

export default SignupScreen;
