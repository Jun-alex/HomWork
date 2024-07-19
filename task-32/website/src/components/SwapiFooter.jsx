import { useDispatch } from "react-redux";
import { clearData } from "../redux/slices/swapiSlice";

export function SwapiFooter() {
    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <button onClick={() => dispatch(clearData())} className="btn btn-clear">Clear</button>
        </footer>
    );
}

