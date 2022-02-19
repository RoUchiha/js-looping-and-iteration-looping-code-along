// Code your solutions in this file

let cards = []
function writeCards(nameArray, event) {
    for (let i = 0; i < nameArray.length; i++) {
        cards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}


function countDown(int) {
    let i = int 
    while (i > -1) {
        console.log(i);
        i--;
    }

}