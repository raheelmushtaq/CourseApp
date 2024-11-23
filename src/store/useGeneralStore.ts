import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import mmkvStorage from './mmkvStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStore = {
    isOnBoardingViewed: boolean;
    updateOnBoarding: (
        isOnBoardingViewed: boolean,
    ) => void
};

const useGeneralStore = create<AuthStore>()(
    persist(
        (set) => ({
            isOnBoardingViewed: false,
            updateOnBoarding: (isOnBoardingViewed) =>
                set({
                   isOnBoardingViewed: isOnBoardingViewed
                }),
        }),
        {
            name: 'general-store',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);

export default useGeneralStore;
