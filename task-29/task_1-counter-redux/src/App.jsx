import {Counter} from "./components/Counter.jsx";
import {IncrementButton} from "./components/IncrementButton.jsx";
import {DecrementButton} from "./components/DecrementButton.jsx";

export function App() {
    return (
        <div>
            <Counter/>
            <IncrementButton/>
            <DecrementButton/>
        </div>
    );
}

