/**
 * Device ID management utility
 * Generates and persists a unique device identifier in local storage
 * This ensures that chat histories remain isolated per device
 */

const DEVICE_ID_KEY = 'ecosense_device_id';

/**
 * Generates a random device ID
 * @returns A random string to use as device ID
 */
function generateDeviceId(): string {
  // Generate a random string with timestamp to ensure uniqueness
  return 'device_' + 
    Math.random().toString(36).substring(2, 10) + 
    '_' + 
    Date.now().toString(36);
}

/**
 * Gets the current device ID from localStorage or generates a new one
 * @returns The device ID for the current device
 */
export function getDeviceId(): string {
  // Check if we already have a device ID in localStorage
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  
  // If not, generate a new one and store it
  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  
  return deviceId;
}

/**
 * Resets the device ID (useful for testing or logout scenarios)
 */
export function resetDeviceId(): void {
  localStorage.removeItem(DEVICE_ID_KEY);
}
