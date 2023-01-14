(function () {
    const quotes = [
        {
            quote:
                `"Man suffers only because he takes seriously what the gods made for fun" - Alan Watts`,
        },
        {
            quote:
                `"The cost of sanity in this society, is a certain level﻿ of alienation" - Terence McKenna`,
        },
        {
            quote: 
                `"Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever" - Michael Scott`,
        },
        {
            quote:
                `"What is hell? I maintain that it is the suffering of being unable to love" - Fyodor Dostoevsky`,
        },
        {
            quote:
                `"But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin" - Aldous Huxley`,
        },
        {
            quote:
                `"Perhaps one did not want to be loved so much as to be understood" - George Orwell`,
        }
    ];

const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener('click', function() {
    let index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index].quote;
})
})();