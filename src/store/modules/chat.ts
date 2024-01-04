import { defineStore } from 'pinia'
import { store } from '/@/store'

import { useUserStore } from './user'

interface ChatState {
  ws: null | WebSocket
}

export const useChatStore = defineStore({
  id: 'app-chat',
  state: (): ChatState => ({
    ws: null,
  }),
  getters: {},
  actions: {
    initWs() {
      const userStore = useUserStore()
      const token = userStore.getToken
      this.ws = new WebSocket(`ws://127.0.0.1:7272?token=${token}`)
    },
  },
})

// Need to be used outside the setup
export function useChatStoreWithOut() {
  return useChatStore(store)
}
