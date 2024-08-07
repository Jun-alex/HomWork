import {useDispatch, useSelector} from "react-redux";
import {clearTodos} from "../redux/slices/todosSlice";

export function Total() {
    const totalCount = useSelector(state => state.todos.items.length);
    const dispatch = useDispatch();

    return (
        <div className="total">
            <p>Всего: {totalCount}</p>
            <button onClick={() => dispatch(clearTodos())}>Очистить</button>
        </div>
    );
}

