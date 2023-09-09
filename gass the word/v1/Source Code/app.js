const Chack = document.querySelector(".Chack-btn");

let wordsArray = ["aahed", "aalii", "aargh", "abaca", "abaci", "aback", "abaft", "abamp", "abase", "abash", "abate", "abaya", "abbas", "abbes", "abbey", "abbot", "abeam", "abele", "abets", "abhor", "abide", "abies", "abler", "ables", "abmho", "abode", "abohm", "aboil", "aboon", "abort", "about", "above", "abrin", "abris", "abuna", "abuse", "abuts", "abuzz", "abyes", "abysm", "abyss", "acais", "acari", "accra", "acerb"];


let arraynum = Math.floor(Math.random() * wordsArray.length);
let word = wordsArray[arraynum];
console.log(word);


Chack.addEventListener("click", () => {
    const inputTagValue = document.querySelector(".enter-Char-Box").value;
    let indexOfChar = checkArray(Array.from(word), inputTagValue);

    if (indexOfChar !== -1) {
        showToast("Crrect");
        let showWord = document.querySelectorAll(".word");
        showWord = Array.from(showWord);
        showWord[indexOfChar].innerHTML = inputTagValue;
    } else {
        showToast("Try Again");
    }

});

function checkArray(arr, inputTagValue) {
    let showWord = document.querySelectorAll(".word");
    showWord = Array.from(showWord);

    for (let ind = 0; ind < arr.length; ind++) {

        if (arr[ind] == inputTagValue) {

            if (showWord[ind].innerHTML == "") {
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