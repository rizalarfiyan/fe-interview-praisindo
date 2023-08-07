import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { generateGravatar } from '@/utils'

import { STORAGE_KEY } from '@/constants'

export interface AuthPayload {
  name: string
  email: string
  avatar: string
}

export interface UseAuthState {
  auth?: AuthPayload
  isAuthenticated: () => boolean
  login: (email: string) => void
  logout: () => void
}

const useAuth = create<UseAuthState>()(
  devtools(
    persist(
      (set, get) => ({
        auth: undefined,
        isAuthenticated: () => !!get().auth,
        login: async (email: string) => {
          const authPayload = {
            name: 'Test Rizal',
            email,
            avatar: await generateGravatar({
              defaultImage: 'mp',
              email,
              size: 200,
            }),
          }
          set({ auth: authPayload })
        },
        logout: () => {
          localStorage.removeItem(STORAGE_KEY.auth)
          set({ auth: undefined })
        },
      }),
      {
        name: STORAGE_KEY.auth,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
)

export default useAuth
