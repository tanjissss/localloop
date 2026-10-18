import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'app.localloop.private',
  appName: 'LocalLoop',
  webDir: 'dist',
  ios: { contentInset: 'automatic' },
  plugins: { Filesystem: { appendAppInfoToPath: true } }
};
export default config;
