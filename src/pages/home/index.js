
import React from 'react';
import { getDeckList } from './utils/index.js';

const Home = () => {
    const [deckList, setDeckList] = React.useState([]);
    const handleGenerateClick = async () => {
        const generatedDecks = await getDeckList(['player1', 'player2', 'player3']);
        setDeckList(generatedDecks);
    };

    return (
        <div>
        <h1>Get your decklist</h1>
            <p>
                Welcome to the decklist generator! This is a simple tool to help you
                generate a decklist for your favorite card game. To get started, add your players separated by "," no spaces and
                click the button.
            </p>
            <input type="text" placeholder="Player name list" />
            <button onClick={handleGenerateClick}>Generate Decklist</button>
            <ul>
                {deckList.map((deck, index) => (
                    <li key={index}>
                        {Object.keys(deck)[0]}: {deck[Object.keys(deck)[0]]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
