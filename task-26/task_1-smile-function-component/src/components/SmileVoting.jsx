import {useEffect, useState} from "react";
import {Header} from "./Header.jsx";
import {Smile} from "./Smile.jsx";
import {Button} from "./Button.jsx";
import {Result} from "./Result.jsx";

export function SmileVoting(props) {
    const initialSmiles = [
        {id: 1, symbol: "🙆", votes: 0},
        {id: 2, symbol: "🤯", votes: 0},
        {id: 3, symbol: "🤦‍♂️", votes: 0},
        {id: 4, symbol: "😳", votes: 0},
        {id: 5, symbol: "🤷‍♂️", votes: 0},
    ];

    const [smiles, setSmiles] = useState(initialSmiles);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const saveVotes = localStorage.getItem("smileVotes");

        if (saveVotes) {
            setSmiles(JSON.parse(saveVotes));
        }
    }, []);

    const countVote = (id) => {
        setSmiles(prevSmiles => {
            const updateSmiles = prevSmiles.map((smile) => {
                if (smile.id === id) {
                    return {...smile, votes: smile.votes + 1};
                }

                return smile;
            });

            localStorage.setItem("smileVotes", JSON.stringify(updateSmiles));
            return updateSmiles;
        });
    }

    const showResult = () => {
        const winner = smiles.reduce((prev, current) =>
            (prev.votes > current.votes)
                ? prev
                : current
        );

        setWinner(winner);
    }

    const clearResults = () => {
        // const clearResult = initialSmiles.map((smile) =>
        //     ({...smile, votes: 0})
        // );

        setSmiles(initialSmiles);
        setWinner(null);
        localStorage.removeItem("smileVotes");
    }

    return (
        <div className="container">
            <Header/>

            <div className="smile-list">
                {smiles.map((smile) => (
                    <Smile
                        key={smile.id}
                        id={smile.id}
                        symbol={smile.symbol}
                        votes={smile.votes}
                        vote={countVote}
                    />
                ))}
            </div>

            <Button onClick={showResult}>Показать результаты</Button>
            <Button onClick={clearResults}>Очистить результаты</Button>
            <Result winner={winner}/>
        </div>
    );
}

