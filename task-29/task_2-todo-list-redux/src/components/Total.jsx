import {useSelector} from "react-redux";

export function Total() {
    const totalCount = useSelector(state => state.todos.items.length);

    return (
        <div className="total">
            <p>Всего: {totalCount}</p>
        </div>
    );
}

