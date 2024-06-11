export function App() {
    return (
        <div className="container mt-5">
            <h1 className="mt-4">SWAPI</h1>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">https://swapi.dev/api/</span>
                </div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="URL endpoint"
                    aria-label="SWAPI URL"
                    aria-describedby="button-addon3"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                        Get info
                    </button>
                </div>
            </div>

            <div className="card">
                <div className="card-body"></div>
            </div>
        </div>
    );
}


