import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.khamchat.app',
  appName: 'KhamChat',
  webDir: 'www',
  server: {
    url: 'https://khamchat-ve3f.vercel.app',
    cleartext: true
  }
};

export default config;
