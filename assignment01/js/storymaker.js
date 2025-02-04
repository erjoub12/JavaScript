// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Selecting elements from HTML
const studentIdElement = document.getElementById("studentId");
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");

const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdjective = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");
const storyOutput = document.getElementById("story");

// Arrays containing words
const nouns = ["cat", "dog", "boy", "girl", "robot"];
const verbs = ["jumps", "runs", "flies", "eats", "sleeps"];
const adjectives = ["happy", "sad", "angry", "hangry", "bored"];
const secondNouns = ["plan", "car", "book", "computer", "phone"];
const settings = ["at the park", "in the house", "on the moon", "under the sea", "in the jungle"];

// Variables to store selected words
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions
-------------------------------------------------- */
// Set student ID dynamically
function setStudentId() {
    studentIdElement.innerText = "Student ID: 123456789"; // Replace with your real student ID
}

// Get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Set selected words when buttons are clicked
function noun1_on_click() {
    selectedNoun1 = getRandomWord(nouns);
    chosenNoun1.innerText = selectedNoun1;
}

function verb_on_click() {
    selectedVerb = getRandomWord(verbs);
    chosenVerb.innerText = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = getRandomWord(adjectives);
    chosenAdjective.innerText = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = getRandomWord(secondNouns);
    chosenNoun2.innerText = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = getRandomWord(settings);
    chosenSetting.innerText = selectedSetting;
}

// Display the final story
function playback_on_click() {
    storyOutput.innerText = `The ${selectedNoun1} ${selectedVerb} a ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
}

// Generate a completely random story
function random_on_click() {
    selectedNoun1 = getRandomWord(nouns);
    selectedVerb = getRandomWord(verbs);
    selectedAdjective = getRandomWord(adjectives);
    selectedNoun2 = getRandomWord(secondNouns);
    selectedSetting = getRandomWord(settings);

    playback_on_click();
}

// Reset all selections
function resetStory() {
    selectedNoun1 = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun2 = "";
    selectedSetting = "";

    chosenNoun1.innerText = "";
    chosenVerb.innerText = "";
    chosenAdjective.innerText = "";
    chosenNoun2.innerText = "";
    chosenSetting.innerText = "";
    storyOutput.innerText = "";
}

/* Event Listeners
-------------------------------------------------- */
window.onload = setStudentId;
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", resetStory);
