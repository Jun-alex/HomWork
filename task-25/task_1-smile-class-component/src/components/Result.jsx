import {Component} from "react";

class Result extends Component {
    render() {
        const {winner} = this.props;

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
}

export default Result;