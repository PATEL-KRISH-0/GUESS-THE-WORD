var wordsArray = ["apple", "banana", "chocolate", "elephant", "giraffe", "umbrella", "mountain", "ocean", "penguin", "rainbow", "sunflower", "watermelon", "zebra", "butterfly", "dolphin", "jacket", "keyboard", "laptop", "microphone", "notebook", "piano", "quilt", "radiator", "sandwich", "telescope", "umbrella", "violin", "waterfall", "xylophone", "yogurt", "zeppelin", "astronaut", "balloon", "candle", "diamond", "earring", "flamingo", "guitar", "hamburger", "icecream", "jellyfish", "kangaroo", "lighthouse", "moon", "nebula", "octopus", "panda", "quokka", "raccoon", "saxophone", "tiger", "umbrella", "volcano", "whale", "xylophone", "yacht", "zebra", "acorn", "butterfly", "caterpillar", "daisy", "elephant", "flamingo", "giraffe", "hedgehog", "iguana", "jellyfish", "koala", "lemur", "mango", "nightingale", "opossum", "penguin", "quetzal", "raccoon", "seahorse", "toucan", "unicorn", "vulture", "wombat", "xylophone", "yak", "zeppelin", "antelope", "bison", "cheetah", "dolphin", "elephant", "falcon", "gazelle"];

let word = ""

let resetFunc = () => {
    let arraynum = Math.floor(Math.random() * wordsArray.length);
    word = wordsArray[arraynum].toUpperCase();

    console.log(word);
    console.log(word.length);

    const wordCon = document.querySelector(".word-Charecter");
    wordCon.innerHTML = ""

    for (let index = 0; index < word.length; index++) {
        wordCon.insertAdjacentHTML("beforeEnd", `<div class="word word${index}">?</div>`);
    }
}


const Chack = document.querySelector(".Chack-btn");
const reset = document.querySelector(".reset");
resetFunc();

reset.addEventListener("click", resetFunc);


Chack.addEventListener("click", () => {
    const inputTagValue = document.querySelector(".enter-Char-Box").value.toUpperCase()
    document.querySelector(".enter-Char-Box").value =""

    let indexOfChar = checkArray(Array.from(word), inputTagValue);

    if (indexOfChar !== -1) {
        let showWord = document.querySelectorAll(".word");
        showWord = Array.from(showWord);
        showWord[indexOfChar].innerHTML = inputTagValue;
        return showToast("Great Work");
    } else {
        if (inputTagValue == "") {
            return showToast("please Enter The Value");
        }
        showToast("Try Again");
    }
});

function checkArray(arr, inputTagValue) {
    let showWord = document.querySelectorAll(".word");
    showWord = Array.from(showWord);

    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] == inputTagValue) {
            if (showWord[ind].innerHTML == "?") {
                return ind;
            }
        }
    }
    return -1;
}


function showToast(message) {
    toast.textContent = message;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);
}