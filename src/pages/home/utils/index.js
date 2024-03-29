export const getDeckList = async (playerList) => {
    const temp1 = fetch('https://api2.moxfield.com/v2/decks/search-sfw?pageNumber=1&pageSize=64&sortType=updated&sortDirection=Descending&fmt=commanderPrecons');
    const data = [];
    const response1 = await temp1;
    const data1 = await response1.json();
    const totalPages = data1.totalPages;
    data.push(...data1.data);
    if (totalPages > 1) {
        for (let i = 2; i <= totalPages; i++) {
            const temp = fetch(`https://api2.moxfield.com/v2/decks/search-sfw?pageNumber=${i}&pageSize=64&sortType=updated&sortDirection=Descending&fmt=commanderPrecons`);
            const response = await temp;
            const {data: data1} = await response.json();
            data.push(...data1);
        }
    }
    const decks = [];
    for (let i = 1; i <= playerList.length; i++) {
        const selectedDeck = data[Math.floor(Math.random() * data.length)];
        decks.push({[playerList[i - 1]]: {name: selectedDeck.name, url: selectedDeck.publicUrl}});
    };
    return decks;
};