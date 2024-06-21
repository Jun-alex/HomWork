import {Component} from "react";
import Smile from "./Smile.jsx";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import Result from "./Result.jsx";

class SmileVoting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                {id: 1, symbol: "🙆", votes: 0},
                {id: 2, symbol: "🤯", votes: 0},
                {id: 3, symbol: "🤦‍♂️", votes: 0},
                {id: 4, symbol: "😳", votes: 0},
                {id: 5, symbol: "🤷‍♂️", votes: 0},
            ],
            winner: null,
        };
    }

    componentDidMount() {
        const saveVotes = localStorage.getItem("smileVotes");

        if (saveVotes) {
            this.setState({smiles: JSON.parse(saveVotes)});
        }
    }

    countVote = (id) => {
        this.setState(prevState => {
            const updateSmiles = prevState.smiles.map(smile => {
                if (smile.id === id) {
                    return {...smile, votes: smile.votes + 1};
                }
                return smile;
            });

            localStorage.setItem("smileVotes", JSON.stringify(updateSmiles));
            return {smiles: updateSmiles};
        });
    }

    showResult = () => {
        const winner = this.state.smiles.reduce((prev, current) =>
            (prev.votes > current.votes)
                ? prev
                : current
        );

        this.setState({winner});
    }

    clearResults = () => {
        const clearResult = this.state.smiles.map(smile => ({...smile, votes: 0}));
        this.setState({smiles: clearResult, winner: null});
        localStorage.removeItem("smileVotes");
    }

    render() {
        return (
            <div className="container">
                <Header/>

                <div className="smile-list">
                    {this.state.smiles.map(smile => (
                        <Smile
                            key={smile.id}
                            id={smile.id}
                            symbol={smile.symbol}
                            votes={smile.votes}
                            vote={this.countVote}
                        />
                    ))}
                </div>

                <Button onClick={this.showResult}>Показать результаты</Button>
                <Button onClick={this.clearResults}>Очистить результаты</Button>
                <Result winner={this.state.winner}/>
            </div>
        );
    }
}

export default SmileVoting;
