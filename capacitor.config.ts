import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.mauski.templo',
  appName: 'AppMauski',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      backgroundColor: '#000000',
      showSpinner: false
    }
  }
};
export default config;