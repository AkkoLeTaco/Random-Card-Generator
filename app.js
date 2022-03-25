let spade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J', 'A']
let suit = ["♦", "♥", "♠", "♣"]
let deck = suit[Math.floor(Math.random() * suit.length)]
let arr = spade[Math.floor(Math.random() * spade.length)]

document.querySelector('#suit').innerHTML = deck
document.querySelector('#suitB').innerHTML = deck
document.querySelector('#cards').innerHTML = arr

if(deck === "♦" || deck === "♥"){
    document.querySelector("#suit").style.color = "red"
}if(deck === "♦" || deck === "♥"){
    document.querySelector("#suitB").style.color = "red"
}