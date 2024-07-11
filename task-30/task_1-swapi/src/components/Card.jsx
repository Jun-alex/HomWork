import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function Card() {
    const { data, loading } = useSelector((state) => state.swapi);

    // useEffect(() => {
    //     console.log('Card component data:', data);
    // }, [data]);

    return (
        <div className="card">
            <div className="card-body">
                {loading ? (
                    "Loading..."
                ) : (
                    <pre>{data && data.results && data.results.length
                        ? JSON.stringify(data.results, null, 2)
                        : "No data"}</pre>
                )}
            </div>
        </div>
    );
}

