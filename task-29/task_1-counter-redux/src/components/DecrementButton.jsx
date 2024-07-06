import {useDispatch} from "react-redux";
import {decrement} from "../store/store.js";

export function DecrementButton() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(decrement())}>-</button>
    );
}

