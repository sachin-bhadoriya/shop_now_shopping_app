import { createContext, useState } from "react";

// Context create
export const CartContext = createContext();

// Provider
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 }
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;