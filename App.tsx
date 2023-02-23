import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log("🚀 ~ file: App.tsx:11 ~ App ~ colorScheme:", colorScheme)
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
