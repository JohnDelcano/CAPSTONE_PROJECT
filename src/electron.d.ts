export {};

declare global {
  interface Window {
    api: {
      appName: string;
      appVersion: string;
      platform: string;
      ping: () => string;
    };
  }
}
