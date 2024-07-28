import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
