import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  message: string;
};

const AlertDanger = ({ message }: Props) => {
  if (!message) return null;

  return (
    <View style={styles.alert}>
      <Ionicons name="alert-circle" size={18} color="#D32F2F" style={{ marginRight: 8 }} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    flexDirection: 'row',
    backgroundColor: '#FDECEA',
    borderWidth: 1,
    borderColor: '#F44336',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  text: {
    color: '#D32F2F',
    fontSize: 14,
    flexShrink: 1,
  },
});

export default AlertDanger;
