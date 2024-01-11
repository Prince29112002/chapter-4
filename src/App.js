import React from "react";
import { AuthProvider } from "./Task-a/AuthContext";
import AuthExample from "./Task-a/AuthExample";
import ThemeContextProvider from './Task-b/ThemeContextProvider';
import NavigationBar from "./Task-cd/NavigationBar";
import { CartProvider } from "./Task-e/CartContext";
import ProductList from "./Task-e/ProductList";
import Withuser from "./Task-g/Withuser";
import { createContext, useState } from 'react';
import Main from "./Project/Main";
export const colors = createContext()


function App() {
  const [theme, setTheme] = useState("Light")
  const changetheme = (theme) => {
    return setTheme(theme)
  }
  return (
    <>
    <div>
      <AuthProvider>
        <h1>Authentication Example</h1>
        <AuthExample />
      </AuthProvider>
      </div>
      <ThemeContextProvider>
      <div>
        <h1>Context & Context Provider Created Successfully!!!</h1>
        <NavigationBar />
      </div>
      <CartProvider>
      <h1>Product Inventory System</h1>
        <ProductList />
      </CartProvider>
      <Withuser />
    </ThemeContextProvider>
    <colors.Provider value={{ theme, changetheme }} >
        <div style={{ backgroundColor: `${theme}` }}>
          <Main />
        </div>
      </colors.Provider>
    </>
  );
}

export default App;
