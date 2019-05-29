import AsyncStorage from "@react-native-community/async-storage";

export const createFave = async id => {
  try {
    const newItem = await AsyncStorage.setItem(
      `${id}`,
      JSON.stringify({ id: id, faveOn: new Date() })
    );
    return newItem;
  } catch (e) {
    return false;
  }
};

export const queryFaves = async () => {
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
