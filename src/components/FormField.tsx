import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

type FormFieldProps = {
    error?: string | boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode; // Ajout de rightIcon pour les icônes à droite
} & TextInputProps;

const FormField = ({ error, leftIcon, rightIcon, ...rest }: FormFieldProps) => {

    return (
        <View style={styles.wrapper}>
            <View style={[styles.inputWrapper, error && styles.errorBorder]}>
                {typeof leftIcon === 'string' ? <Text>{leftIcon}</Text> : leftIcon}
                <TextInput style={styles.input} {...rest} />
                {typeof rightIcon === 'string' ? <Text>{rightIcon}</Text> : rightIcon}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 4,
        fontWeight: '500',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#d0d0d0'
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    errorBorder: {
        borderWidth: 1,
        borderColor: '#E74C3C',
    },
    errorText: {
        color: '#E74C3C',
        fontSize: 12,
        marginTop: 4,
    },
});

export default FormField;
