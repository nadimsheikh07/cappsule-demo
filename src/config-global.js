// API
// ----------------------------------------------------------------------

export const HOST_API_KEY = process.env.NEXT_PUBLIC_API_URL || "";

export const PHARMACY_ID = process.env.NEXT_PUBLIC_API_PHARMACY_ID || "";

export function allKeysEmpty(array) {
  return array.every((element) => {
    if (element === null) return true;
  });
}
