import React from "react";
import {Provider} from "react-redux";
import {history, store} from "./redux/store.js";
import {Route, Routes} from "react-router-dom";
import {HistoryRouter as Router} from "redux-first-history/rr6"
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="hotels" element={<Hotels/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
