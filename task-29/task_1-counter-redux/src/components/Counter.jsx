import {useSelector} from "react-redux";

export function Counter() {
    const count = useSelector(state => state.counter.count);

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
}

