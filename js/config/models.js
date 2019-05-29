import AsyncStorage from "@react-native-community/async-storage";

export const saveFave = async id => {
  try {
    AsyncStorage.setItem(`${id}`, JSON.stringify({ id, faveOn: new Date() }));
  } catch (e) {
    throw new Error(e);
  }
};

export const queryFave = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    return false;
  }
};

export const deleteFave = async id => {
  try {
    await AsyncStorage.removeItem(`${id}`);
  } catch (e) {
    return false;
  }
};
