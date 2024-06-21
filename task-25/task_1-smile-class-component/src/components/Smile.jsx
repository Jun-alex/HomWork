import {Component} from "react";

class Smile extends Component {
    countVote = () => {
        this.props.vote(this.props.id);
    }

    render() {
        const {symbol, votes} = this.props;

        return (
            <div className="smile-item" onClick={this.countVote}>
                <span className="smile-sumbol">{symbol}</span>
                <div>{votes}</div>
            </div>
        );
    }
}

export default Smile;