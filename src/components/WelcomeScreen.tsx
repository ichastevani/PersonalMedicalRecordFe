// src/components/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  const handleConnectWallet = () => {
    console.log("Wallet Connected");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Your Personal Medical Record</Text>
      <Text style={styles.subtitle}>Stay in control of your medical data anytime, anywhere</Text>

      {/* Tombol dengan styling kustom */}
      <TouchableOpacity style={styles.button} onPress={handleConnectWallet}>
        <Text style={styles.buttonText}>Connect Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#608BC1', // Warna background biru
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#003366', // Warna tombol biru tua
    paddingVertical: 18,  // Perbesar tombol dengan padding vertikal
    paddingHorizontal: 40, // Perbesar tombol dengan padding horizontal
    borderRadius: 30, // Membuat sudut tombol lebih halus
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Ukuran tombol agar lebih lebar
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default WelcomeScreen;
