import AsyncStorage from "@react-native-async-storage/async-storage";

type DefaultUserType = {
    username: string,
    nama: string,
    password: string,
    isAuth: boolean
}

const STORAGE_KEY_AUTH = '@auth_information';

const DEFAULT_USER: DefaultUserType = {
    username: '',
    nama: '',
    password: '',
    isAuth: false
}

// const DEFAULT_USER = new Array();

/**
 * Get User store as object
 * @returns {}|null
 */
 const getUser = async () => {
    const user = await AsyncStorage.getItem(STORAGE_KEY_AUTH);
    return user !== null ? JSON.parse(user) : DEFAULT_USER;
};

/**
 * Set User store as JSON string from given object
 * @param {object} user
 * @returns object
 */
 const setUser = async (user: any) => {
    const oldUser = await getUser();
    const newUser = {
      ...oldUser,
      ...user,
    };


    await AsyncStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(newUser));
    return newUser;
}

/**
 * Remove and reset user entity
 * @returns object
 */
 const deleteUser = async () => {
    const resetUser = DEFAULT_USER;
    await AsyncStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(resetUser));
    return resetUser;
};

export{
    getUser,
    setUser,
    deleteUser
}
  