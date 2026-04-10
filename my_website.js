// Donate to Website Owner - Pure JavaScript Document

// Create the HTML structure using JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f8f8f8";
document.body.style.margin = "0";
document.body.style.padding = "0";

const container = document.createElement('div');
container.style.maxWidth = "400px";
container.style.margin = "60px auto";
container.style.background = "#fff";
container.style.padding = "32px";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

const heading = document.createElement('h2');
heading.textContent = "Donate to Support Us";
heading.style.textAlign = "center";
container.appendChild(heading);

const form = document.createElement('form');
form.id = "donationForm";

// Name label and input
const nameLabel = document.createElement('label');
nameLabel.htmlFor = "name";
nameLabel.textContent = "Your Name (optional):";
nameLabel.style.display = "block";
nameLabel.style.marginTop = "16px";
form.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = "text";
nameInput.id = "name";
nameInput.name = "name";
nameInput.placeholder = "Enter your name";
nameInput.style.width = "100%";
nameInput.style.padding = "8px";
nameInput.style.marginTop = "4px";
nameInput.style.border = "1px solid #ccc";
nameInput.style.borderRadius = "4px";
form.appendChild(nameInput);

// Amount label and input
const amountLabel = document.createElement('label');
amountLabel.htmlFor = "amount";
amountLabel.textContent = "Donation Amount (USD):";
amountLabel.style.display = "block";
amountLabel.style.marginTop = "16px";
form.appendChild(amountLabel);

const amountInput = document.createElement('input');
amountInput.type = "number";
amountInput.id = "amount";
amountInput.name = "amount";
amountInput.min = "1";
amountInput.step = "0.01";
amountInput.required = true;
amountInput.placeholder = "Enter amount";
amountInput.style.width = "100%";
amountInput.style.padding = "8px";
amountInput.style.marginTop = "4px";
amountInput.style.border = "1px solid #ccc";
amountInput.style.borderRadius = "4px";
form.appendChild(amountInput);

// Submit button
const button = document.createElement('button');
button.type = "submit";
button.textContent = "Donate";
button.style.marginTop = "24px";
button.style.width = "100%";
button.style.padding = "12px";
button.style.background = "#0078d4";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.fontSize = "16px";
form.appendChild(button);

container.appendChild(form);

// Message div
const message = document.createElement('div');
message.id = "message";
container.appendChild(message);

document.body.appendChild(container);

// Form submission logic
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 1) {
        message.textContent = "Please enter a valid donation amount.";
        message.className = "error";
        message.style.color = "red";
        message.style.textAlign = "center";
        message.style.marginTop = "16px";
        return;
    }

    // Simulate donation process (replace with real payment integration)
    message.textContent = `Thank you${name ? ', ' + name : ''} for donating $${amount.toFixed(2)}!`;
    message.className = "success";
    message.style.color = "green";
    message.style.textAlign = "center";
    message.style.marginTop = "16px";
    form.reset();
});

// Simple Number Guessing Game
const gameContainer = document.createElement('div');
gameContainer.style.marginTop = "40px";
gameContainer.style.padding = "24px";
gameContainer.style.background = "#f1f7ff";
gameContainer.style.borderRadius = "8px";
gameContainer.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";

const gameTitle = document.createElement('h3');
gameTitle.textContent = "Number Guessing Game";
gameTitle.style.textAlign = "center";
gameContainer.appendChild(gameTitle);

const instructions = document.createElement('p');
instructions.textContent = "Guess a number between 1 and 20:";
instructions.style.textAlign = "center";
gameContainer.appendChild(instructions);

const guessInput = document.createElement('input');
guessInput.type = "number";
guessInput.min = "1";
guessInput.max = "20";
guessInput.placeholder = "Your guess";
guessInput.style.width = "100%";
guessInput.style.padding = "8px";
guessInput.style.marginTop = "8px";
guessInput.style.border = "1px solid #ccc";
guessInput.style.borderRadius = "4px";
gameContainer.appendChild(guessInput);

const guessBtn = document.createElement('button');
guessBtn.textContent = "Guess";
guessBtn.style.marginTop = "16px";
guessBtn.style.width = "100%";
guessBtn.style.padding = "10px";
guessBtn.style.background = "#0078d4";
guessBtn.style.color = "#fff";
guessBtn.style.border = "none";
guessBtn.style.borderRadius = "4px";
guessBtn.style.fontSize = "15px";
gameContainer.appendChild(guessBtn);

const resultMsg = document.createElement('div');
resultMsg.style.textAlign = "center";
resultMsg.style.marginTop = "16px";
gameContainer.appendChild(resultMsg);

document.body.appendChild(gameContainer);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

guessBtn.addEventListener('click', function() {
    const guess = parseInt(guessInput.value, 10);
    attempts++;
    if (isNaN(guess) || guess < 1 || guess > 20) {
        resultMsg.textContent = "Please enter a number between 1 and 20.";
        resultMsg.style.color = "red";
        return;
    }
    if (guess === secretNumber) {
        resultMsg.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        resultMsg.style.color = "green";
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else if (guess < secretNumber) {
        resultMsg.textContent = "Too low! Try again.";
        resultMsg.style.color = "orange";
    } else {
        resultMsg.textContent = "Too high! Try again.";
        resultMsg.style.color = "orange";
    }
});