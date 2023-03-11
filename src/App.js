import React from 'react';
import { Provider } from "react-redux"
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Settings from "./components/Settings"
import Weather from "./components/Weather"
import store from './redux/store';


const App = () => {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/weather" element={<Weather />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<Navigate to="/weather" />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>

  );
};

export default App;