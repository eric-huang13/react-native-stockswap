import AsyncStorage from '@react-native-async-storage/async-storage';


const clearAppData = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing data.');
    }
}

export default clearAppData;
