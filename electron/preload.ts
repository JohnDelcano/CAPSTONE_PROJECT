import { contextBridge } from 'electron';
import { app } from 'electron';

// Expose a minimal API to the renderer in a safe, controlled way.
contextBridge.exposeInMainWorld('api', {
  appName: app.getName(),
  appVersion: app.getVersion(),
  platform: process.platform,
  ping: () => 'pong',
});
