console.log("JavaScript is loaded!"); // Debugging to check if the file is loaded

// Selecting required elements
const studentIdElement = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageDisplay = document.getElementById("images");

// Array of image filenames (Ensure these files exist inside img/)
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function to change background color based on user input
function changeCustomColor() {
    let value = parseInt(customNumberInput.value);
    let color = "white";

    if (value < 0 || value > 100) color = "red";
    else if (value <= 20) color = "green";
    else if (value <= 40) color = "blue";
    else if (value <= 60) color = "orange";
    else if (value <= 80) color = "purple";
    else if (value <= 100) color = "yellow";

    document.body.style.backgroundColor = color;
    studentIdElement.textContent = "Student ID: 123456789"; // Replace with your actual student ID
}

// Function to generate a random number and change background color
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 101);
    customNumberInput.value = randomValue;
    changeCustomColor();
}

// Function to populate the dropdown list with images
function addList() {
    if (imageSelect.children.length > 1) return; // Prevent duplicate options

    images.forEach((image) => {
        let option = document.createElement("option");
        option.value = `img/${image}`; // Ensure correct path
        option.textContent = image;
        imageSelect.appendChild(option);
    });

    console.log("Dropdown populated with images.");
}

// Function to change the displayed image based on selection
function changeImage() {
    let selectedImage = imageSelect.value;
    if (selectedImage) {
        console.log("Trying to load:", selectedImage); // Debugging
        imageDisplay.src = selectedImage;
        imageDisplay.alt = "Selected Image";
    } else {
        imageDisplay.src = "img/placeholder.jpg";
        imageDisplay.alt = "No Image Selected";
    }
}

// Event Listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Populate the dropdown list when the page loads
document.addEventListener("DOMContentLoaded", addList);
