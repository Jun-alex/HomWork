import {useDispatch} from "react-redux";
import {increment} from "../store/store.js";

export function IncrementButton() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(increment())}>+</button>
    );
}

