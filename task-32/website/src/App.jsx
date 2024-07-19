import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { TodoPage } from "./pages/TodoPage.jsx";
import { SwapiPage } from "./pages/SwapiPage.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/swapi" element={<SwapiPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

