import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages:[],
  setMessages: (messages) => set({ messages }),
  isCurrentUserBlocked: false,
  setIsCurrentUserBlocked: (isCurrentUserBlocked) => set({ isCurrentUserBlocked }),
  isReceiverBlocked: false,
  setIsReceiverBlocked: (isReceiverBlocked) => set({ isReceiverBlocked }),
}))

export default useConversation