import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';
import {Provider} from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hotels" element={<Hotels/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
