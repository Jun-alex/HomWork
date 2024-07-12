import React from 'react';
import {useSelector} from 'react-redux';

export function Card() {
    const {data, loading} = useSelector((state) => state.swapi);

    return (
        <div className="card">
            <div className="card-body">
                {loading ? (
                    "Loading..."
                ) : (
                    <pre>{data
                        ? JSON.stringify(data, null, 2)
                        : "No data"}</pre>
                )}
            </div>
        </div>
    );
}

