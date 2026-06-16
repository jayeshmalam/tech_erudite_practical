declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_API_BASE_URL: string;
  }
  export const Config: NativeConfig;
  export default Config;
}