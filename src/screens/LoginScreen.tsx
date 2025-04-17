import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types';


type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

///////////////  Add icon for every input fields like user 

const LoginScreen = ({ navigation }: LoginScreenProps) => {


    const handleLogin = () => {
        // Add validation and API logic here
        console.log('Login data:');
        navigation.replace('BottomTabs');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>

            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText} onPress={() => navigation.replace('Signup')}>
                <Text style={{ color: '#007AFF' }}>
                    Don’t have an account? Sign up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomText} onPress={() => navigation.replace('BottomTabs')}>
                <Text style={{ color: 'gray' }}>
                    Continue without logging in
                </Text>
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
    input: {
        backgroundColor: '#F0F0F0',
        padding: 14,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 16,
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
        marginTop: 20,
        alignItems: 'center',
    },
});

export default LoginScreen;