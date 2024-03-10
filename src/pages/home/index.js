
import React from 'react';
import { getDeckList } from './utils/index.js';

const Home = () => {
    const [playerList, setPlayerList] = React.useState('');
    const [deckList, setDeckList] = React.useState([]);

    const handleGenerateClick = async () => {
        const players = playerList.split(',');
        const generatedDecks = await getDeckList(players);
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
            <input
                type="text"
                value={playerList}
                onChange={(e) => setPlayerList(e.target.value)}
            />
            <button onClick={handleGenerateClick}>Generate Decklist</button>
            <ul>
                {deckList.map((deck, index) => ( 
                    <li key={index}>
                        {Object.keys(deck)[0]}: {deck[Object.keys(deck)].name} - <a href={
                            deck[Object.keys(deck)].url
                        }>Go</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
