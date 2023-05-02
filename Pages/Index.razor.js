export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export function typewriter() {
    const typeText = document.querySelector(".typewriter");
    const text = typeText.textContent;
    const delay = 100;

    typeText.textContent = "";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typeText.textContent += text[i];
        }, delay * i);
    }
}

/*
export function typewriter(words) {
    const typeText = document.querySelector(".typewriter");
    const delay = 100;

    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let currentWord = words[currentWordIndex];

    typeText.textContent = "";

    const typeLetter = () => {
        typeText.textContent += currentWord[currentLetterIndex];
        currentLetterIndex++;
        if (currentLetterIndex < currentWord.length) {
            setTimeout(typeLetter, delay);
        } else {
            currentLetterIndex = 0;
            currentWordIndex++;
            if (currentWordIndex >= words.length) {
                currentWordIndex = 0;
            }
            currentWord = words[currentWordIndex];
            setTimeout(typeWord, delay * 10);
        }
    };

    const typeWord = () => {
        typeText.textContent = "";
        setTimeout(typeLetter, delay);
    };

    const typeWords = () => {
        typeLetter();
        if (currentWordIndex >= words.length) {
            currentWordIndex = 0;
        }
        currentWord = words[currentWordIndex];
        currentLetterIndex = 0;
        currentWordIndex++;
        setTimeout(typeWords, delay * currentWord.length * 2);
    };

    typeWords();
}
*/