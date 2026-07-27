import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.zip.app',
  appName: 'Zip',
  webDir: '.',
  server: { androidScheme: 'https' }
};
export default config;