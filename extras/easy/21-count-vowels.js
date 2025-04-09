/*
    Count vowels from each word  and show how many there are.
*/

let words = ['abeja', 'raton', 'mochila', 'libro'];


function countVowels(arr) {
    let counted = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j<arr[i].length; j++) {
            if(vowels.includes(arr[i][j])) {
                count++;
            }
        }
        counted[i] = count;
    }

    console.log(counted);
}

countVowels(words);