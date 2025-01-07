import { Stack } from 'expo-router';
import 'react-native-reanimated';
import NetInfo from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { Alert } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        // Show an alert if the device is offline
        Alert.alert('No Internet Connection', 'You are currently offline. Please check your internet connection.');
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
