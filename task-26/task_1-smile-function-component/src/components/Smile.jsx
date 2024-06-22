export function Smile(props) {
    const {id, symbol, votes, vote} = props;

    const countVote = () => {
        vote(id);
    }

    return (
        <div className="smile-item" onClick={countVote}>
            <span className="smile-symbol">{symbol}</span>
            <div>{votes}</div>
        </div>
    );
}
