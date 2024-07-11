import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Header } from "./components/Header.jsx";
import { InputField } from "./components/InputField.jsx";
import { Card } from "./components/Card.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
    return (
        <Provider store={store}>
            <div className="container mt-5">
                <Header />
                <InputField />
                <Card />
                <Footer />
            </div>
        </Provider>
    );
}

