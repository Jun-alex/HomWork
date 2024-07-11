import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSwapi } from "../store/swapiSlice.js";

export function InputField() {
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();

    const handleFetch = () => {
        dispatch(fetchSwapi(url));
        setUrl("");
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">https://swapi.dev/api/</span>
            </div>
            <input
                className="form-control"
                type="text"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="URL endpoint"
                aria-label="SWAPI URL"
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={handleFetch}>
                    Get info
                </button>
            </div>
        </div>
    );
}

