import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  addItem: (product, quantity = 1) => 
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    const store = useCartStore.getState();
    return store.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
}));

export default useCartStore;