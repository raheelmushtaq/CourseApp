import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import mmkvStorage from './mmkvStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserLoginTpe = "user" | 'guest'
type UserStore = {
    isUserLoggedIn: boolean;
    name: string, 
    email:string, phoneNumber:string, phoneCode:string
    updateUserLoginStatus: (
        isUserLoggedIn: boolean,
    ) => void
    logout: (
        
    ) => void

};

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            isUserLoggedIn: false,
            name: "",
            email: "",
            phoneNumber: "",
            phoneCode: "",
            updateUserLoginStatus: (isUserLoggedIn) =>
                set({
                   isUserLoggedIn: isUserLoggedIn,
                   name:"User",
                   email:"user@user.com",
                   phoneCode: "+92",
                 phoneNumber  : "3264488222",
                }),
            logout: () =>
                set({
                   isUserLoggedIn: false,
                   name:"",
                   email:""
                }),
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);

export default useUserStore;
