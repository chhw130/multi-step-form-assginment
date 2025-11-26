export const getSessionStorageValue = <T>(key: string) => {
  try {
    const value = sessionStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setSessionStorageValue = <T>(key: string, value: T) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
