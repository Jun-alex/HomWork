export function Result(props) {
    const {winner} = props;

    if (!winner) {
        return null;
    }

    return (
        <div>
            <h2>Результат голосования!</h2>
            <div>Победитель: {winner.symbol}</div>
            <div>Количество голосов: {winner.votes}</div>
        </div>
    );
}

