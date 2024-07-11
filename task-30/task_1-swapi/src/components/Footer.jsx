import { useDispatch } from "react-redux";
import { clearData } from "../store/swapiSlice.js";

export function Footer() {
    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <button onClick={() => dispatch(clearData())} className="btn btn-clear">Clear</button>
        </footer>
    );
}

