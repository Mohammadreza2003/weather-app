import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from ".//redux/store";
import Settings from "./components/Settings";
import Weather from "./components/Weather";
export const themeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("");

  return (
    <>
      <Provider store={store}>
        <themeContext.Provider
          value={{ darkMode: theme, setdarkMode: setTheme }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/weather" element={<Weather />} />
              <Route path="/settings" element={<Settings />} />
              
              <Route path="/*" element={<Navigate to="/weather" />} />
            </Routes>
          </BrowserRouter>
        </themeContext.Provider>
      </Provider>
    </>
  );
};

export default App;
